import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  img{
    margin-top: 130px;
  }
  p{
    text-align: center;
    color: #FFF;
    font-family: Noto Sans KR;
    margin : 20px auto 116px auto;
    font-size: 12px;
    line-height: normal;
  }
`

function Footer() {
  return (
    <StyledFooter>
      <img src="images/weniv.svg" alt="wenivLogo" />
      <p>※ 본 서비스 내 이미지 및 콘텐츠의 저작권은 주식회사 WeNiv에 있습니다. <br /> 수정 및 재배포, 무단 도용 시 법적인 문제가 발생할 수 있습니다.</p>
    </StyledFooter>
  )
}

export default Footer