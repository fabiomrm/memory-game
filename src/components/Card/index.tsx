import { GridItemType } from "../../types";
import * as Styled from "./styles";
import QuestionMark from "../../assets/images/question-mark.svg";
import { items } from "../../data/items";

type Props = {
  item: GridItemType;
  onClick: () => void;
};
export const Card = ({ item, onClick }: Props) => {
  return (
    <Styled.Container
      showBackground={item.isFound || item.isShown}
      onClick={onClick}
    >
      {!item.isFound && !item.isShown && (
        <Styled.Icon src={QuestionMark} opacity={0.1} />
      )}
      {(item.isFound || item.isShown) && item.item !== null && (
        <Styled.Icon src={items[item.item].icon} alt={items[item.item].name} />
      )}
    </Styled.Container>
  );
};
