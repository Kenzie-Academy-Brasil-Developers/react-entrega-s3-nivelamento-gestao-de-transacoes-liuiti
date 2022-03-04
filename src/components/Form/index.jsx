import { useForm } from "react-hook-form";
import { useState } from "react";
import Button from "../Buttom";
import Input from "../Input";
import {
  Container,
  FormContainer,
  ContainerMovement,
  AllMovements,
  FilterMovements,
} from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import List from "../List";
import Spend from "../Spend";
import Entrance from "../Entrance";
import Sum from "../Sum";

const Form = () => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .min(3, "Mínimo de 3 letras"),
    quantity: yup
      .number()
      .typeError("A quantidade precisa ser número")
      .required("Quantidade obrigatória"),
    price: yup
      .number()
      .typeError("O preço precisa ser número")
      .required("Preço obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    setTransactions([...transactions, data]);
    data.quantity > 0 && setNewTransactions([...newTransactions, data]);
  };

  const [transactions, setTransactions] = useState([]);

  const [newTransactions, setNewTransactions] = useState([]);
  const [isOn, setIsOn] = useState(false);

  const filterEntrance = () => {
    setNewTransactions(
      transactions.filter((transaction) => transaction.quantity > 0)
    );
    setIsOn(!isOn);
  };

  const filterSpending = () => {
    setNewTransactions(
      transactions.filter((transaction) => transaction.quantity < 0)
    );
    setIsOn(!isOn);
  };

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit(handleForm)}>
        <Input
          name="name"
          register={register}
          label="Nome"
          placeholder="Digite o nome da fruta"
          error={errors.name?.message}
        />
        <Input
          name="quantity"
          register={register}
          label="Quantidade"
          placeholder="Digite a quantidade"
          error={errors.quantity?.message}
        />
        <Input
          name="price"
          register={register}
          label={"Preço"}
          placeholder="Digite o valor"
          error={errors.price?.message}
        />
        <Button type="submit" backgroundColor="#FFE4C4">
          Enviar
        </Button>
      </FormContainer>
      <ContainerMovement>
        <FilterMovements>
          {!isOn ? (
            <>
              <Button
                type="button"
                backgroundColor="#FA8072"
                onClick={() => filterSpending()}
              >
                Saída
              </Button>
              <Entrance transactions={newTransactions} />
            </>
          ) : (
            <>
              <Button
                type="button"
                backgroundColor="#1cb01c"
                onClick={() => filterEntrance()}
              >
                Entrada
              </Button>
              <Spend transactions={newTransactions} />
            </>
          )}
        </FilterMovements>
        <AllMovements>
          <List transactions={transactions} />
          <Sum newTransactions={transactions} />
        </AllMovements>
      </ContainerMovement>
    </Container>
  );
};

export default Form;
