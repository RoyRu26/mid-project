import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage/HomePage";
import Footer from './components/Footer/Footer';
import Context from "./components/Context";
import { createContext } from 'react';
import GetStarted from "./components/GetStarted";
import ActTypeFilter from "./components/actType/ActTypeFilter";
import ApplyPage from "./components/applyPage/ApplyPage";
import ActTypeDetail from "./components/actTypeDetail/ActTypeDetail";
import NotFound from "./components/NotFound";
import AdminLogIn from "./components/AdminLogIn";
import AdminPage from "./components/AdminPage";
import PhotoSlider from "./components/Activities/Activities";

export const  actList = createContext()


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
  const {x,actArr,userArr, setUserArr}=Context()
  const contextActList={x,actArr,userArr, setUserArr}
  return (
    <actList.Provider value={contextActList}>
    <ThemeProvider theme={theme}>
      <NavBar/>  
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/GetStarted" element={<GetStarted/>}/>
        <Route path="/ActTypeFilter" element={<ActTypeFilter/>}/>
        <Route path="/ApplyPage" element={<ApplyPage/>}/>
        <Route path="/ActTypeFilter/:country" element={<ActTypeFilter/>}/>
        <Route path="/ApplyPage" element={<ApplyPage/>}/>
        <Route path="/ActTypeDetail" element={<ActTypeDetail/>}/>
        <Route path="/AdminLogIn" element={<AdminLogIn/>}/>
        <Route path="/AdminPage" element={<AdminPage/>}/>
        <Route path="/*" element={<NotFound/>}/>
        <Route path="/Gallery" element = {<PhotoSlider />} />
      </Routes>
      <Footer/>
    </ThemeProvider>
    </actList.Provider>
  );
}

export default App;
