import styled from "styled-components";

export const InteractiveTableContainer = styled.div`
  background: ${(props) => props.theme.colors.white};
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
`;

export const InteractiveTableRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
`;

export const InteractiveTableHeaderRow = styled(InteractiveTableRow)`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
`;

export const InteractiveTableCell = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InteractiveTableHeaderCell = styled(InteractiveTableCell)`
  justify-content: center;
  font-size: 1rem;
  text-transform: capitalize;
`;
