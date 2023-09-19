import React from 'react'
import styled from 'styled-components'



function Result(props) {

  let hour = parseInt(10000/props.hour)
  const onClickTraining = () =>{
    props.setModal(true)
  }

  return (
    <StyledResult>
      <p className='result'>
        당신은 <strong>{props.expert}</strong> 전문가가 되기 위해서 <br />
        대략 <strong>{hour}</strong>일 이상 훈련하셔야 합니다! : &#41;
      </p>
      <button className = "training_btn" onClick={onClickTraining}>훈련하러 가기 GO! GO!</button>
      <button className = "share_btn">공유하기</button>
    </StyledResult>
  )
}
const StyledResult = styled.section`
@font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
  .result{

    margin-top: 147px;
    text-align: center;
    color: #FFF;
    font-family: GmarketSansMedium;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;  
    strong{
      font-size: 72px;
      font-weight: 700;
    }
  }
  .training_btn{
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
  
  .share_btn{
    margin-top: 115px;
    border-radius: 56px;
    background: #FFF;;
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

export default Result