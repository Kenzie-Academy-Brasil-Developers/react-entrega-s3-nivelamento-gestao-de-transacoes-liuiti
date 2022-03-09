import AllMovesCard from "../AllMovesCard";
import { ContainerList, ContainerTransactions, BoxNoMove } from "./styles";

const AllMovesList = ({ transactions, setTransactions }) => {
  return (
    <ContainerList>
      <strong>Total</strong>
      <span>Movimentações</span>
      <ContainerTransactions>
        {transactions.length > 0 ? (
          transactions.map((transaction, index) => (
            <AllMovesCard
              key={index}
              transaction={transaction}
              transactions={transactions}
              setTransactions={setTransactions}
              index={index}
            />
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

export default AllMovesList;
