import { CardInfo } from "./styles";
import { FaRegTrashAlt } from "react-icons/fa";

const Card = ({ transaction, transactions, setNewTransactions, index }) => {
  const cardRemove = () => {
    const filterCards = transactions.filter(
      (element, primaryIndex) => index !== primaryIndex
    );
    setNewTransactions(filterCards);
  };

  return (
    <CardInfo>
      <section>
        <span>{`Nome: ${transaction.name}`}</span>
        <span>{`Quantidade: ${transaction.quantity}`}</span>
        <span>{`Preço: ${transaction.price}`}</span>
      </section>
      <div>
        <button onClick={() => cardRemove()}>
          <FaRegTrashAlt />
        </button>
      </div>
    </CardInfo>
  );
};

export default Card;
