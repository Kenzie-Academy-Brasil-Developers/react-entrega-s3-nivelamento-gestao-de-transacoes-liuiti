import { ContainerSpending } from "./styles";
import List from "../List";
import Sum from "../Sum";

const Spend = ({ transactions, setNewTransactions, setTransactions }) => {
  return (
    <ContainerSpending>
      <span>Saída</span>
      <List
        transactions={transactions}
        setNewTransactions={setNewTransactions}
        setTransactions={setTransactions}
      />
      <Sum newTransactions={transactions} />
    </ContainerSpending>
  );
};

export default Spend;
