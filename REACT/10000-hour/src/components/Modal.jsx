import React from 'react'
import styled from 'styled-components'

function Modal(props) {

  return (
    <StyledModal>
      <h4>화이팅!!♥♥♥</h4>
      <p>당신의 꿈을 응원합니다!</p>
      <img src="images/licat.svg" alt="licatImage" />
      <button onClick={props.setModal(false)}>종료하고 진짜 훈련하러 가기 GO! GO!</button>
    </StyledModal>
  )
}

const StyledModal = styled.section`

  @font-face {
    font-family: 'OTEnjoystoriesBA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/OTEnjoystoriesBA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal; 
  }
  width: 800px;
  height: 800px;
  border-radius: 30px;
  background: #FFF;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.50);
  display: flex;
  flex-direction: column;
  align-items: center;
  & h4{
    color: #5B2386;
    font-family: 'OTEnjoystoriesBA';
    font-size: 96px;
    font-weight: 700;
    text-align: center;
    margin-top: 76px;
    margin-bottom: 4px;
  }
  & p{
    color: #5B2386;
    font-family: 'OTEnjoystoriesBA';
    font-size: 36px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 33px;
  }
  & button{
    margin-top: 26px;
    margin-right: 18px;
    margin-top: 115px;
    border-radius: 56px;
    background: #FCEE21;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.50);
    padding: 21px 49px;
    color: #5B2386;
    text-align: center;
    font-family: GmarketSansMedium;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
  }
  
`

export default Modal