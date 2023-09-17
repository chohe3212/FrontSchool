import Footer from "./components/Footer";
import Main from "./components/Main";
import Result from "./components/Result";
import styled from "styled-components";
import { Reset } from "styled-reset";

const GlobalStyle = styled.div`
  background: #5b2386;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <>
      <GlobalStyle>
        <Reset />
        <Main />
        <Result />
        <Footer />
      </GlobalStyle>
    </>
  );
}

export default App;
