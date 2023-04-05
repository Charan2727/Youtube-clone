import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from './components/Menu'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Video from "./pages/Video";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { darkTheme, LightTheme } from "./utils/Theme";
import Signin from "./pages/Signin";



const Container = styled.div`
display: flex;
`;

const Main = styled.div`
flex:7;
background-color:${({ theme }) => theme.bgLighter};
`;
const Wrapper = styled.div`
padding:22px 96px;
`;




const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : LightTheme}>
      <Container>
        <Router>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signin' element={<Signin />} />
                <Route path="/video/:id" element={<Video />} />



              </Routes>
            </Wrapper>

          </Main>
        </Router>
      </Container>
    </ThemeProvider>
  )
};

export default App;