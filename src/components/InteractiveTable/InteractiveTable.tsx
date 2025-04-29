import { useState } from "react";
import { InteractiveTableProps, TableRow } from "./InteractiveTable.types";
import {
  InteractiveTableContainer,
  InteractiveTableRow,
  InteractiveTableCell,
  InteractiveTableHeaderRow,
  InteractiveTableHeaderCell,
} from "./InteractiveTable.styled";

import { Select } from "../Shared/Select/Select";
import { Input } from "../Shared/Input/Input";
import { Checkbox } from "../Shared/Checkbox/Checkbox";

export const InteractiveTable = <T extends TableRow>({
  data,
  editableConfig,
  selectOptions,
}: InteractiveTableProps<T>) => {
  const [tableData, setTableData] = useState<Array<T>>(data);
  const [showMore, setShowMore] = useState<boolean>(false);

  if (tableData.length === 0) {
    return <p>No hay datos para mostrar.</p>;
  }

  const headers = Object.keys(tableData[0]) as Array<keyof T>;

  const handleChange = (
    rowIndex: number,
    key: keyof T,
    value: string | number
  ) => {
    const updatedData = [...tableData];
    updatedData[rowIndex] = { ...updatedData[rowIndex], [key]: value };
    setTableData(updatedData);
  };

  const visibleRows = showMore ? tableData : tableData.slice(0, 1);

  return (
    <>
      <InteractiveTableContainer>
        {/* Cabecera */}
        <InteractiveTableHeaderRow>
          {headers.map((header) => (
            <InteractiveTableHeaderCell key={String(header)}>
              {String(header).charAt(0).toUpperCase() + String(header).slice(1)}
            </InteractiveTableHeaderCell>
          ))}
        </InteractiveTableHeaderRow>
        {/* Filas */}
        {visibleRows.map((row, rowIndex) => (
          <InteractiveTableRow key={rowIndex}>
            {headers.map((key) => {
              const value = row[key];
              const editableType = editableConfig[key];
              const options = (selectOptions?.[key] || []).map(String);
              /* 1ra fila- Todos Selects habilitados */
              if (rowIndex === 0) {
                return (
                  <InteractiveTableCell key={String(key)}>
                    <Select
                      value={String(value)}
                      options={options}
                      onChange={(newValue) =>
                        handleChange(rowIndex, key, newValue)
                      }
                      disabled={false}
                    />
                  </InteractiveTableCell>
                );
              }
              /* 2da fila - campos habilitados/deshabilitados */
              if (rowIndex === 1) {
                if (editableType === "select") {
                  return (
                    <InteractiveTableCell key={String(key)}>
                      <Select
                        value={String(value)}
                        options={options}
                        onChange={(newValue) =>
                          handleChange(rowIndex, key, newValue)
                        }
                        disabled={false}
                      />
                    </InteractiveTableCell>
                  );
                }
                if (editableType === "input") {
                  return (
                    <InteractiveTableCell key={String(key)}>
                      <Input
                        value={typeof value === "number" ? value : 0}
                        type="number"
                        disabled={false}
                        onChange={(newValue) =>
                          handleChange(rowIndex, key, newValue)
                        }
                      />
                    </InteractiveTableCell>
                  );
                }
                return (
                  <InteractiveTableCell key={String(key)}>
                    <Select
                      value={String(value)}
                      options={options}
                      disabled={true}
                    />
                  </InteractiveTableCell>
                );
              }
              /** 3ra - Inputs numéricos */
              if (rowIndex === 2) {
                if (editableType === "input" && typeof value === "number") {
                  return (
                    <InteractiveTableCell key={String(key)}>
                      <Input
                        value={value}
                        type="number"
                        disabled={false}
                        onChange={(newValue) =>
                          handleChange(rowIndex, key, newValue)
                        }
                      />
                    </InteractiveTableCell>
                  );
                }
                return (
                  <InteractiveTableCell key={String(key)}>
                    {value}
                  </InteractiveTableCell>
                );
              }
              /** Return por defecto */
              return (
                <InteractiveTableCell key={String(key)}>
                  {value}
                </InteractiveTableCell>
              );
            })}
          </InteractiveTableRow>
        ))}
      </InteractiveTableContainer>
      {/* Checkbox para ver más / ver menos */}
      {tableData.length > 1 && (
        <Checkbox
          id="showMore"
          label="Mostrar todas las filas"
          checked={showMore}
          onChange={(checked) => setShowMore(checked)}
        />
      )}
    </>
  );
};
