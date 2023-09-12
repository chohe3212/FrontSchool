import React from 'react'
import './Addlist.css'
import { useState } from 'react'

function Addlist() {
  const [name, setName] = useState("") 
  const [species, setSpecies] = useState("") 
  const [age, setAge] = useState(0) 

  return (
    <>
      <p>새로운 애완동물을 추가하세요!</p>
      <div className = "input_container">
        <input type="text" placeholder='이름' />
        <input type="text" placeholder='종'/>
        <input type="text" placeholder='나이'/>
        <button>추가하기</button>
      </div>
    </>
  )
}

export default Addlist