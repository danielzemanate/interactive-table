export interface InputProps {
  id?: string;
  value: number;
  onChange: (value: number) => void;
  type?: string;
  disabled?: boolean;
}
