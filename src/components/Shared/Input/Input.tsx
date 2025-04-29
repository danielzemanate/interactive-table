import { FC } from "react";
import { InputStyled } from "./Input.styled";
import { InputProps } from "./Input.types";

export const Input: FC<InputProps> = ({
  id,
  value,
  onChange,
  type = "text",
  disabled = false,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = Number(e.target.value);
    if (numericValue >= 0) {
      onChange(numericValue);
    }
  };

  return (
    <InputStyled
      id={id}
      type={type}
      value={value}
      min={0}
      disabled={disabled}
      onChange={handleInputChange}
    />
  );
};
