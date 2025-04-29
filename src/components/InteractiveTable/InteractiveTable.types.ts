export type TableRow = Record<string, string | number>;

export interface InteractiveTableProps<T extends TableRow> {
  data: Array<T>;
  editableConfig: Record<keyof T, "select" | "input" | "readonly">;
  selectOptions?: Partial<Record<keyof T, Array<string | number>>>;
}
