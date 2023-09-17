import React from 'react'
import styled from 'styled-components'

const StyledResult = styled.section`
@font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
  & .result{
color: #FFF;
font-family: Gmarket Sans;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
  }
  & .training_btn{

  }
  & .share_btn{

  }
  
`

function Result() {
  return (
    <StyledResult>
      <p className='result'>
        당신은 <strong>프로그래밍</strong> 전문가가 되기 위해서 <br />
        대략 <strong>5110</strong>일 이상 훈련하셔야 합니다! : &#41;
      </p>
      <button className = "training_btn">훈련하러 가기 GO! GO!</button>
      <button className = "share_btn">공유하기</button>
    </StyledResult>
  )
}

export default Result