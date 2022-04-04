import * as Styled from "./styles";

type Props = {
  label: string;
  icon: string | React.ReactNode;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

export const Button = ({ label, icon, onClick }: Props) => {
  return (
    <Styled.Container onClick={onClick}>
      <Styled.IconArea>{icon}</Styled.IconArea>
      <Styled.Label>{label}</Styled.Label>
    </Styled.Container>
  );
};
