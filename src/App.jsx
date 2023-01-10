import { createTheme } from "@mui/material";
import { fontWeight, ThemeProvider } from "@mui/system";
import { Routes , Route } from "react-router-dom";
import NavBar from "./components/NavBar";

const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary: {
      main: '#8e24aa'
    }
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightMedium: 500,
    fontWeightLarge: 600
  }
})
function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar/>
      <Routes>
        {/* <Route path='/' element={<HomePage/>}/> */}
        <HomePage/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
