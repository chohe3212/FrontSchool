import React, { useState } from 'react'

export default function Resume(props) {
  let [like, setLike] = useState("");

  function clickLike (){
    if (like === ""){
      setLike("like")
    }
    else {
      setLike("");
    }

    console.log(like);
    // like 값이 바뀔때마다 컴포넌트를 다시 렌더링 해줘야 한다.
  }

  return (
    <div>
      <div>{props.hello}</div>
      <div>{props.name}</div>
      <div>{props.hobby}</div>
      <div>{props.food}</div>
      <button onClick = {clickLike}>like </button><span>{like}</span>
    </div>
  )
}
