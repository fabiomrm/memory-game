import * as Styled from "./styles";
import { ReactComponent as LogoIcon } from "./assets/images/b7.svg";
import { ReactComponent as RestartIcon } from "./assets/images/restart.svg";
import { InfoItem } from "./components/InfoItem";
import { Button } from "./components/Button";

function App() {
  const handleResetAndCreateGrid = () => {};

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
        <Button
          label="Reiniciar"
          icon={<RestartIcon />}
          onClick={handleResetAndCreateGrid}
        />
      </Styled.Info>
      <Styled.GridArea>...</Styled.GridArea>
    </Styled.Container>
  );
}

export default App;
