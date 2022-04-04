import * as Styled from "./styles";
import { ReactComponent as LogoIcon } from "./assets/images/b7.svg";

function App() {
  return (
    <Styled.Container>
      <Styled.Info>
        <Styled.LogoLink href="">
          <LogoIcon />
        </Styled.LogoLink>
        <Styled.InfoArea>...</Styled.InfoArea>
        <button>REINICIAR</button>
      </Styled.Info>
      <Styled.GridArea>...</Styled.GridArea>
    </Styled.Container>
  );
}

export default App;
