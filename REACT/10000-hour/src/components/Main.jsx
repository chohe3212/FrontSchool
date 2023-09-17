import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'


function Main(props) {
  let expertValue = ''
  let hourValue = ''
  // 부모에게 값 전달
  const onChangeExpert = (e)=>{
    expertValue = e.target.value
    props.setExpert(expertValue)
  }
  const onChangeHour = (e) =>{
    hourValue = e.target.value
    props.setHour(hourValue)
  }

  const clickBtnResult = () => {
    
    props.setVisible(true);
  }
  return (
    <StyledMain>
      <h1>
        <img src="images/clock.svg" alt="clockImage" /><div className = "logo"><img src="images/Frame.svg" alt="LogoImage" /></div>
      </h1>
      <h2>“연습은 어제의 당신보다 당신을 더 낫게 만든다.”</h2>
      <div className = "container_description">
      <span className = "double_quotation_marks">“</span>
      <p className = "description"><strong>1만 시간의 법칙</strong>은 <br />어떤 분야의 전문가가 되기 위해서는 <br />최소한 1만 시간의 훈련이 필요하다는 법칙이다.</p><span className= "double_quotation_marks">”</span>
      </div>
      <p className='input_form'>
        나는 

        <input type="text" placeholder='예)프로그래밍' value = {props.expert} onChange={onChangeExpert} /> 

        전문가가 될 것이다. <br />그래서 앞으로 매일 하루에 

        <input type="text" placeholder='예)5시간' value = {props.hour} onChange={onChangeHour}/> 

        시간씩 훈련할 것이다.
      </p>
      <div className='result_button'><button onClick={clickBtnResult}>나는 며칠 동안 훈련을 해야 1만 시간이 될까?</button>
      <img src="images/click.svg" alt="clickImage" /></div>

    </StyledMain>
  )
}


const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

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
  h1{
    margin-top: 140px;
    position: relative;
    text-align: center;
    & .logo{
          position: absolute;
    top:50%;
    left:50%;
    transform : translate(-50%,-50%);
    }
  }
  h2{
    margin-top: 66px;
    margin-bottom: 78px;
    color: #F5DF4D;
    font-size: 36px;
    font-family:OTEnjoystoriesBA;
  }
  & .container_description{
    display: flex;
    font-family: GmarketSansMedium;
    justify-content: center;
    
    & .description{
    color: #FFF;
    text-align: center;
    font-size: 18px;
    font-family: GmarketSansMedium;
    line-height:normal;
    & strong{
      font-weight: 700;
      font-size: 24px;
    }
  }
  & .double_quotation_marks{
      color: rgba(252, 238, 33, 0.30);
      font-size: 96px;
    }

  }  & .input_form{
    color: #FFF;
    margin-top: 119px;
    font-size: 24px;
    text-align: center;
    font-family: GmarketSansMedium;
    & input{
      width: 228px;
      height: 57px;
      border-radius: 7px;
      background: #FFF;
      text-align: center;
      font-family: GmarketSansMedium;
      font-size: 24px;
    }
  }

  & .result_button{
    display: flex;
    & button{
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
  & img{
    width: 64px;
    height: 72px;
    top: 145px;
    left: 7px;
    position: relative;
  }
  }

`

export default Main