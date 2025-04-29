import { ThemeProvider } from "styled-components";
import { createTheme } from "./constants/theme";
import { HospitalShiftManager } from "./pages/HospitalShiftManager";

function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <HospitalShiftManager />
    </ThemeProvider>
  );
}

export default App;
