import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  type: "submit" | "button";
  isDisabled?: boolean;
  actionOnClick?: () => void;
  className?: string;
}

const Button = ({
  text,
  type,
  isDisabled,
  actionOnClick,
  className,
}: ButtonProps): React.ReactElement => (
  <ButtonStyled
    type={type}
    disabled={isDisabled}
    onClick={actionOnClick}
    className={className}
  >
    {text}
  </ButtonStyled>
);

export default Button;
