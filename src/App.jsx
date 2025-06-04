import { ThemeProvider } from "styled-components";
import { ControladorDeRotas } from "./routes/Routes";
import { GlobalStyled } from "./globalStyles/GlobalStyled";
import { theme } from "./globalStyles/theme";
import { Navbar, Footer } from "./components";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <Navbar />
      <ControladorDeRotas />;
      <Footer />
    </ThemeProvider>
  );
}
