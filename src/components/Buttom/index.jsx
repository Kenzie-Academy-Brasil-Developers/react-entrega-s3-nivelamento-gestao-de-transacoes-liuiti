import { ButtomContainer } from "./styles";

const Button = ({ children, backgroundColor = "#f8f9fa", ...rest }) => {
  return (
    <ButtomContainer {...rest} backgroundColor={backgroundColor}>
      {children}
    </ButtomContainer>
  );
};

export default Button;
