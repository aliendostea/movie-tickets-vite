import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../../styles/GlobalStyles";
import { theme } from "../../../styles/theme";
import { ContainerGrid as Container } from "./ContainerGrid.style";

const ContainerGrid = ({ children }: any) => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyles />
        {children}
      </Container>
    </ThemeProvider>
  );
};

export default ContainerGrid;
