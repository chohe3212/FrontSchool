import React from 'react'

const arr = [1,2,3,4,5,6];

function ReactFragment() {
  const Myarr = arr.map((item)=>{
    return  (
    <React.Fragment key = {item} className = "fragment">
      <dt>숫자</dt>
      <dd>{item}!</dd>
    </React.Fragment>
    )
  })
  return (
    <React.Fragment className = "fragment">
      <h1>hello</h1>
      <h2>효은!</h2>
      <dl>
        {Myarr}
      </dl>
    </React.Fragment>
  )
}

export default ReactFragment