import { CardInfo } from "./styles";

const Card = ({ transaction }) => {
  return (
    <CardInfo>
      <span>{`Nome: ${transaction.name}`}</span>
      <span>{`Quantidade: ${transaction.quantity}`}</span>
      <span>{`Preço: ${transaction.price}`}</span>
    </CardInfo>
  );
};

export default Card;
