import { InputContainer, InputValidation } from "./styles";

const Input = ({ register, name, label, error, ...rest }) => {
  return (
    <InputContainer>
      <label>{label}</label>
      <InputValidation isErrored={!!error}>
        <input {...register(name)} {...rest} />
      </InputValidation>
      <div>{!!error && <span>{error}</span>}</div>
    </InputContainer>
  );
};

export default Input;
