import * as Styled from "./styles";

import { ReactComponent as RestartIcon } from "./assets/images/restart.svg";
import { InfoItem } from "./components/InfoItem";
import { Button } from "./components/Button";
import { useEffect, useState } from "react";
import { GridItemType } from "./types";
import { items } from "./data/items";
import { Card } from "./components/Card";
import { formatTime } from "./utils/formatters";

function App() {
  const [playing, setPlaying] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [moveCount, setMoveCount] = useState(0);
  const [shownCount, setShownCount] = useState(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);

  useEffect(() => {
    if (moveCount > 0 && gridItems.every((i) => i.isFound)) {
      setPlaying(false);
      alert("FIM DE JOGO!");
    }
  }, [moveCount, gridItems]);

  useEffect(() => {
    handleResetAndCreateGrid();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      playing && setTimeElapsed(() => timeElapsed + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [playing, timeElapsed]);

  useEffect(() => {
    if (shownCount === 2) {
      let opened = gridItems.filter((item) => item.isShown);
      if (opened.length === 2) {
        if (opened[0].item === opened[1].item) {
          let tempGrid = [...gridItems];
          for (let i in tempGrid) {
            if (tempGrid[i].isShown) {
              tempGrid[i].isShown = false;
              tempGrid[i].isFound = true;
            }
          }
          setGridItems(() => tempGrid);
          setShownCount(() => 0);
        } else {
          setTimeout(() => {
            let tempGrid = [...gridItems];
            for (let i in tempGrid) {
              tempGrid[i].isShown = false;
            }
            setGridItems(() => tempGrid);
            setShownCount(() => 0);
          }, 1000);
        }

        setMoveCount(() => moveCount + 1);
      }
    }
  }, [shownCount, gridItems]);

  const handleResetAndCreateGrid = () => {
    setTimeElapsed(0);
    setMoveCount(0);
    setShownCount(0);

    let tempGrid: GridItemType[] = [];

    for (let i = 0; i < 2 * items.length; i++) {
      tempGrid.push({
        item: null,
        isShown: false,
        isFound: false,
      });
    }

    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < items.length; j++) {
        let pos = -1;
        while (pos < 0 || tempGrid[pos].item !== null) {
          pos = Math.floor(Math.random() * (items.length * 2));
        }
        tempGrid[pos].item = j;
      }
    }
    setGridItems(() => tempGrid);
    setPlaying(true);
  };

  const handleItemClick = (index: number) => {
    if (playing && index !== null && shownCount < 2) {
      let tempGrid = [...gridItems];

      if (!tempGrid[index].isFound && !tempGrid[index].isShown) {
        tempGrid[index].isShown = true;
        setShownCount(() => shownCount + 1);
      }
      setGridItems(tempGrid);
    }
  };

  return (
    <Styled.Container>
      <Styled.Info>
        <h1>FMRM</h1>
        <Styled.InfoArea>
          <InfoItem label="Tempo" value={formatTime(timeElapsed)} />
          <InfoItem label="Movimentos" value={String(moveCount)} />
        </Styled.InfoArea>
        <Button
          label="Reiniciar"
          icon={<RestartIcon />}
          onClick={handleResetAndCreateGrid}
        />
      </Styled.Info>
      <Styled.GridArea>
        <Styled.Grid>
          {gridItems.map((item, index) => (
            <Card
              key={index}
              item={item}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </Styled.Grid>
      </Styled.GridArea>
    </Styled.Container>
  );
}

export default App;
