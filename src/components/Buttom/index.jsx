import { ButtomContainer } from "./styles";

const Button = ({
  children,
  hoverColor,
  backgroundColor = "#f8f9fa",
  ...rest
}) => {
  return (
    <ButtomContainer
      {...rest}
      hoverColor={hoverColor}
      backgroundColor={backgroundColor}
    >
      {children}
    </ButtomContainer>
  );
};

export default Button;
