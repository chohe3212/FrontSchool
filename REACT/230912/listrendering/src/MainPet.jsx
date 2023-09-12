import React from 'react'
import { useState } from 'react';


function MainPet() {
  

  const [pets, setPets] = useState([
        { name: "벨라", species: "고양이", age: "5", id: 111 },
        { name: "루시", species: "강아지", age: "3", id: 112 },
        { name: "데이지", species: "토끼", age: "2", id: 113 },
        { name: "몰리", species: "고양이", age: "1", id: 114 },
        { name: "매기", species: "강아지", age: "6", id: 115 }
    ]);

    return (
        <>
            <AddPetForm setPets = {setPets}/>
            <ul>
                {pets.map((item) => {
                  return <PetItem key = {item.id} data = {item}/>
                })}
            </ul>
        </>
    )
}

function AddPetForm({setPets}) {
  const [name,setName] = useState("");
  const [species, setSpecices] = useState("");
  const [age, setAge] = useState(0);

  // handleSubmit 이벤트가 발생하면, 리스트 업데이트됨.
  function handleSubmit(event){
    // submit이 일어나면 초기화가 되기에, 이벤트 막아주는 preventdefault를 작성해주어야함.
    event.preventDefault();
    setPets((prev)=>{
      // prev는 이전데이터
      return [...prev, { name, species, age, id: Date.now() }];
      // date.now는 중복될 수가 없기에
    });
  }

    return (
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>새로운 애완동물을 추가해주세요</legend>
            <label>
              이름 : <input type="text" value = {name} onChange={(event)=>setName(event.target.value)}/>
            </label>
            <label>
              종 : <input type="text" value = {species} onChange={(event)=>setSpecices(event.target.value)} />
            </label>
            <label>
              나이 : <input type="number" value = {age} onChange={(event)=>setAge(event.target.value)}/>
            </label>
            <button>추가하기</button>
          </fieldset>
        </form>
    )
}

function PetItem({data}) {
    return (
        <li>{data.name}는 {data.species}입니다. 그리고 {data.age}살입니다.</li>
    )
}
export default MainPet
