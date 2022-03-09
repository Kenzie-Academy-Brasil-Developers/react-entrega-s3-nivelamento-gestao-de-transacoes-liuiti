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
import Spend from "../Spend";
import Entrance from "../Entrance";
import Sum from "../Sum";
import AllMovesList from "../AllMovesList";

const Form = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    quantity: yup
      .number()
      .transform((value, originalValue) => {
        return originalValue === "" ? undefined : value;
      })
      .required("Quantidade obrigatória")
      .typeError("A quantidade precisa ser número"),
    price: yup
      .number()
      .transform((value, originalValue) => {
        return originalValue === "" ? undefined : value;
      })
      .required("Preço obrigatório")
      .typeError("O preço precisa ser número"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    setInputName("");
    setInputQuantity("");
    setInputPrice("");
    setTransactions([...transactions, data]);
    data.quantity > 0
      ? setEntrance([...entrance, data])
      : setSpending([...spending, data]);
  };

  const [transactions, setTransactions] = useState([]);
  const [entrance, setEntrance] = useState([]);
  const [spending, setSpending] = useState([]);
  const [isOn, setIsOn] = useState(false);
  const [inputName, setInputName] = useState("");
  const [inputQuantity, setInputQuantity] = useState("");
  const [inputPrice, setInputPrice] = useState("");

  const buttonTransition = () => {
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
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <Input
          name="quantity"
          register={register}
          label="Quantidade"
          placeholder="Digite a quantidade"
          error={errors.quantity?.message}
          value={inputQuantity}
          onChange={(e) => setInputQuantity(e.target.value)}
        />
        <Input
          name="price"
          register={register}
          label={"Preço"}
          placeholder="Digite o valor"
          error={errors.price?.message}
          value={inputPrice}
          onChange={(e) => setInputPrice(e.target.value)}
        />
        <Button type="submit" hoverColor="#e9a449" backgroundColor="#FFE4C4">
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
                hoverColor="#cc0000"
                onClick={() => buttonTransition()}
              >
                Saída
              </Button>
              <Entrance
                transactions={entrance}
                setNewTransactions={setEntrance}
                setTransactions={setTransactions}
              />
            </>
          ) : (
            <>
              <Button
                type="button"
                backgroundColor="#1cb01c"
                hoverColor="#568f56"
                onClick={() => buttonTransition()}
              >
                Entrada
              </Button>
              <Spend
                transactions={spending}
                setNewTransactions={setSpending}
                setTransactions={setTransactions}
              />
            </>
          )}
        </FilterMovements>
        <AllMovements>
          {!isOn ? (
            <Button
              type="button"
              backgroundColor="#dcdcdc"
              hoverColor="#b3b3b3"
              onClick={() =>
                setEntrance(
                  transactions.filter((transaction) => transaction.quantity > 0)
                )
              }
            >
              Atualizar
            </Button>
          ) : (
            <Button
              type="button"
              backgroundColor="#dcdcdc"
              hoverColor="#b3b3b3"
              onClick={() =>
                setSpending(
                  transactions.filter((transaction) => transaction.quantity < 0)
                )
              }
            >
              Atualizar
            </Button>
          )}
          <AllMovesList
            transactions={transactions}
            setTransactions={setTransactions}
          />
          <Sum newTransactions={transactions} />
        </AllMovements>
      </ContainerMovement>
    </Container>
  );
};

export default Form;
