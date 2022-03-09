import { ContainerEntrance } from "./styles";
import List from "../List";
import Sum from "../Sum";

const Entrance = ({ transactions, setTransactions, setNewTransactions }) => {
  return (
    <ContainerEntrance>
      <span>Entrada</span>
      <List
        transactions={transactions}
        setNewTransactions={setNewTransactions}
        setTransactions={setTransactions}
      />
      <Sum newTransactions={transactions} />
    </ContainerEntrance>
  );
};

export default Entrance;
