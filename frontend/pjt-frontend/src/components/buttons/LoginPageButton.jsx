import styled from 'styled-components';

const LoginPageButton = styled.button`
  box-shadow: 0 0 40px 40px  #1b1a55 inset, 0 0 0 0  #1b1a55;
  appearance: none;
  font-family: 'Galmuri11-Bold';
  font-size: 2rem;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  position: relative;
  overflow: hidden;
  background-color: #1b1a55; /* 마우스를 올렸을 때 배경색 */
  transition: background-color 0.6s ease-in-out, transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, color 0.3s ease-in-out;
      box-shadow: 0 0 10px 0  #1b1a55 inset, 0 0 10px 4px  #1b1a55;

  &:hover {
    transform: scale(1.05); /* 약간 확대 */
    box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
`;

export default LoginPageButton;
