import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 750px;
  margin: auto;
  display: flex;

  & svg {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 750px) {
    margin-bottom: 50px;
    align-items: center;
  }
`;
export const LogoLink = styled.a`
  display: block;
`;
export const InfoArea = styled.div`
  width: 100%;
  margin: 10px 0;
`;
export const GridArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
