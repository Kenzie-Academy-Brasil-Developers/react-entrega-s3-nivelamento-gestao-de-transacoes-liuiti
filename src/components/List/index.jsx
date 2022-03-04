import Card from "../Card";
import { ContainerList, ContainerTransactions, BoxNoMove } from "./styles";

const List = ({ transactions }) => {
  return (
    <ContainerList>
      <span>Movimentações</span>
      <ContainerTransactions>
        {transactions.length > 0 ? (
          transactions.map((transaction, index) => (
            <Card key={index} transaction={transaction} />
          ))
        ) : (
          <BoxNoMove>
            <h2>Não há movimentação!</h2>
          </BoxNoMove>
        )}
      </ContainerTransactions>
    </ContainerList>
  );
};

export default List;
