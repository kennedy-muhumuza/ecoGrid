import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
  margin-left: 20px;
  border-bottom: 2px solid var(--color-gry-600);
`;

const Img = styled.img`
  height: 3rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      {/* <Img src="/logo-light.png" alt="Logo" /> */}
      <Img src="/eg.jpg" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
