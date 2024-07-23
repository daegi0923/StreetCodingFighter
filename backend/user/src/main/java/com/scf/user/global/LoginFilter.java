package com.scf.user.global;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.scf.user.application.dto.LoginDto;
import com.scf.user.application.service.MemberDetailService;
import com.scf.user.application.service.RedisService;
import com.scf.user.domain.entity.User;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@RequiredArgsConstructor
@Slf4j
public class LoginFilter extends UsernamePasswordAuthenticationFilter {

    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider jwtTokenProvider;
    private final ObjectMapper objectMapper; // Jackson ObjectMapper를 사용하여 JSON 파싱
    private final RedisService redisService;
    private final MemberDetailService memberDetailService;


    @Override
    public Authentication attemptAuthentication(HttpServletRequest request,
        HttpServletResponse response) throws AuthenticationException {
        try {
            // 요청 본문에서 JSON 데이터를 읽어와 LoginDto 객체로 변환
            LoginDto loginRequest = objectMapper.readValue(request.getInputStream(),
                LoginDto.class);

            // JSON에서 userId와 password를 추출
            String userId = loginRequest.getUserId();
            String password = loginRequest.getPassword();

            // UsernamePasswordAuthenticationToken 생성
            UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                userId, password);

            // 인증 시도
            return authenticationManager.authenticate(authenticationToken);
        } catch (IOException e) {
            log.error("Failed to parse login request", e);
            throw new BadCredentialsException("Invalid login request format", e);
        }
    }


    // 로그인을 성공했을 시 실행하는 메서드
    @Override
    protected void successfulAuthentication(HttpServletRequest request,
        HttpServletResponse response, FilterChain chain, Authentication authResult)
        throws IOException, ServletException {
        UserDetails userDetails = (UserDetails) authResult.getPrincipal();

        // 사용자 정보를 추가로 가져오는 로직
        User user = (User) memberDetailService.loadUserByUsername(userDetails.getUsername());
        String userName = user.getName();
        long memberId = user.getId();

        // 토큰을 생성하고 발급
        String accessToken = jwtTokenProvider.generateAccessToken(authResult, memberId);
        String refreshToken = jwtTokenProvider.createRefreshToken();

        response.setHeader("Authorization", "Bearer " + accessToken);
        response.addCookie(createCookie("refresh", refreshToken));
        redisService.setValues(userDetails.getUsername(), refreshToken);
    }

    // 로그인을 실패했을시.
    @Override
    protected void unsuccessfulAuthentication(HttpServletRequest request,
        HttpServletResponse response, AuthenticationException failed)
        throws IOException, ServletException {
        response.setStatus(401);

    }

    private Cookie createCookie(String key, String value) {

        Cookie cookie = new Cookie(key, value);
        cookie.setMaxAge(24 * 60 * 60); // 24시간
        //cookie.setSecure(true);
        //cookie.setPath("/");
        cookie.setHttpOnly(true);

        return cookie;
    }
}
