export interface SelectProps {
  id?: string;
  value: string;
  options: Array<string | number>;
  onChange?: (value: string) => void;
  disabled?: boolean;
}
