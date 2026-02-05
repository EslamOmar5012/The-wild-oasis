import styled from "styled-components";
import logoLight from "../assets/imgs/logo-light.png";
import logoDark from "../assets/imgs/logo-dark.png";
import { useDarkMode } from "../hooks/useDarkMode";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? logoLight : logoDark;

  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
