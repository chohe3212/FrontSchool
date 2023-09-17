import { useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Result from "./components/Result";
import styled from "styled-components";
import { Reset } from "styled-reset";
import Modal from "./components/Modal";

function App() {
  const [expert, setExpert] = useState("");
  const [hour, setHour] = useState("");
  const [visible, setVisible] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <>
      <GlobalStyle>
        <Reset />
        <Main
          expert={expert}
          setExpert={setExpert}
          hour={hour}
          setHour={setHour}
          setVisible={setVisible}
        />
        {visible === true ? (
          <Result expert={expert} hour={hour} setModal={setModal} />
        ) : null}
        <Footer />
        {modal === true ? <Modal setModal={setModal} /> : null}
      </GlobalStyle>
    </>
  );
}
const GlobalStyle = styled.div`
  background: #5b2386;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
