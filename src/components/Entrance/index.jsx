import { ContainerEntrance } from "./styles";
import List from "../List";
import Sum from "../Sum";

const Entrance = ({ transactions }) => {
  return (
    <ContainerEntrance>
      <span>Entrada</span>
      <List transactions={transactions} />
      <Sum newTransactions={transactions} />
    </ContainerEntrance>
  );
};

export default Entrance;
