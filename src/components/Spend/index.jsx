import { ContainerSpending } from "./styles";
import List from "../List";
import Sum from "../Sum";

const Spend = ({ transactions }) => {
  return (
    <ContainerSpending>
      <span>Saída</span>
      <List transactions={transactions} />
      <Sum newTransactions={transactions} />
    </ContainerSpending>
  );
};

export default Spend;
