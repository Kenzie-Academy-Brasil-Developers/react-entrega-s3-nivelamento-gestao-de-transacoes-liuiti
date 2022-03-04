import { BoxTransactions, ContainerTotal } from "./styles";

const Sum = ({ newTransactions }) => {
  return (
    <ContainerTotal>
      <span>Total</span>
      <BoxTransactions>
        <p>Quantidade:</p>
        <span>
          {newTransactions.reduce((acc, item) => {
            return acc + item.quantity;
          }, 0)}
        </span>
        <p>Preço:</p>
        <span>
          {newTransactions
            .reduce((acc, item) => {
              return acc + item.price;
            }, 0)
            .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
        </span>
      </BoxTransactions>
    </ContainerTotal>
  );
};

export default Sum;
