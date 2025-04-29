import { FC } from "react";
import { SelectStyled } from "./Select.styled";
import { SelectProps } from "./Select.types";

export const Select: FC<SelectProps> = ({
  id,
  value,
  options,
  onChange,
  disabled = false,
}) => {
  return (
    <SelectStyled
      id={id}
      value={value}
      onChange={(e) => !disabled && onChange && onChange(e.target.value)}
      disabled={disabled}
    >
      <option value="">Seleccionar...</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </SelectStyled>
  );
};
