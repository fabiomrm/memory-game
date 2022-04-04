import * as Styled from "./styles";
import { ReactComponent as LogoIcon } from "./assets/images/b7.svg";
import { InfoItem } from "./components/InfoItem";

function App() {
  return (
    <Styled.Container>
      <Styled.Info>
        <Styled.LogoLink href="">
          <LogoIcon />
        </Styled.LogoLink>
        <Styled.InfoArea>
          <InfoItem label="Tempo" value="00:00" />
          <InfoItem label="Movimentos" value="0" />
        </Styled.InfoArea>
        <button>REINICIAR</button>
      </Styled.Info>
      <Styled.GridArea>...</Styled.GridArea>
    </Styled.Container>
  );
}

export default App;
