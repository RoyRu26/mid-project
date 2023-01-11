import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage/HomePage";
import Footer from './components/Footer/Footer';
import About from "./components/About";

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
       
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
