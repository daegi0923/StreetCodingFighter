package com.scf.multi.domain.dto.user;

import java.util.ArrayList;
import java.util.List;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class Player {

    private Long userId;
    private String username;
    private Boolean isHost;
    private Integer streakCount;
    private final List<Solved> solveds = new ArrayList<>();
    private String sessionId;

    @Builder
    public Player(Long userId, String username, Boolean isHost, Integer streakCount) {
        this.userId = userId;
        this.username = username;
        this.isHost = isHost;
        this.streakCount = streakCount;
    }

    public void addSolved(Solved solved) {
        this.solveds.add(solved);
    }
}
