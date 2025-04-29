import { FC } from "react";
import {
  CheckboxContainer,
  CheckboxInput,
  CheckboxLabel,
} from "./Checkbox.styled";
import { CheckboxProps } from "./Checkbox.types";

export const Checkbox: FC<CheckboxProps> = ({
  id,
  label,
  checked,
  onChange,
}) => {
  return (
    <CheckboxContainer>
      <CheckboxInput
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <CheckboxLabel htmlFor={id}>{label}</CheckboxLabel>
    </CheckboxContainer>
  );
};
