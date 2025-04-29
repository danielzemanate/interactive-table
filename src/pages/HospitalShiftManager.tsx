import { InteractiveTable } from "../components/InteractiveTable/InteractiveTable";
import { Container, Title } from "../components/styles/Global.styled";
import { dummyData, editableConfig, selectOptions } from "../data/dummyData";

export const HospitalShiftManager = () => {
  return (
    <Container>
      <Title>Tabla interactiva</Title>
      <InteractiveTable
        data={dummyData}
        editableConfig={editableConfig}
        selectOptions={selectOptions}
      />
    </Container>
  );
};
