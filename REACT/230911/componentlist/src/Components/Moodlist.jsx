import React from 'react'
import Mood from './Mood'

function Moodlist(props) {

  function clickMood(){
    props.nowMood = "기분이 "+this.nowState
  }

  return (
    <div>
      <button onClick = {clickMood} style = {{padding: "10px"}}><Mood nowState = "좋아요!😁"/></button>
      <button onClick = {clickMood}><Mood nowState = "정말 좋아요!😎"/></button>
      <button onClick = {clickMood}><Mood nowState = "최고에요!🤩"/></button>
      <button onClick = {clickMood}><Mood nowState = "미쳤어요!😆"/></button>
    </div>
  )
}

export default Moodlist