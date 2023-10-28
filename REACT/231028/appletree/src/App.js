import { useEffect, useState } from "react";
import "./App.css";
import AppleData from "./data.json";
import Apple from "./components/Apple";
import NewBtn from "./components/NewBtn";
import NewAppleModal from "./components/modal/NewAppleModal";

function parseData() {
  // 데이터 파싱하는 함수
  // json 데이터 가져와서 파싱해주기
  // 초기 json 데이터를 이용해 초기화 해주기
  const apples = {};

  AppleData.forEach((item) => {
    apples[item.id] = item;
  });

  return apples;
}

function positionApples(apples) {
  Object.values(apples).forEach((apple) => {
    apple.position = {
      left: apple.offset.x,
      top: apple.offset.y,
    };
  });
}

function App() {
  const [apples, setApples] = useState({});
  const [dragAppleInfo, setDragAppleInfo] = useState(null);
  // 드래그를 통한 상태 관리
  const [isAddOpen, setIsAddOpen] = useState(false);

  useEffect(() => {
    const parsedApples = parseData();
    positionApples(parsedApples);
    setApples({ ...parsedApples });
    console.log(parsedApples);
  }, []); // 빈 배열을 넣어줘야 처음 한번만 실행됨.

  // 사과를 제거하는 함수입니다.
  function handleDelete(apple) {
    const tempApples = { ...apples };
    // 원본데이터를 보존해야한다..
    delete tempApples[apple.id];
    setApples(tempApples);
  }
  function showModal() {
    setIsAddOpen(true);
  }

  const AppleList = Object.values(apples).map((apple) => {
    return (
      <Apple
        key={apple.id}
        apple={apple}
        // 드래그 시작하면 트리거
        onDragStart={(dragOffset) => setDragAppleInfo({ apple, dragOffset })}
        // 드래그 끝내면 트리거
        onDragEnd={() => setDragAppleInfo(null)}
        // 더블클릭했을때 호출합니다.
        onDoubleClick={() => handleDelete(apple)}
      />
    );
  });

  return (
    <div
      className="App"
      onMouseMove={(event) => {
        if (!dragAppleInfo) {
          //이게 null이면 사용자가 드래그를 안했다는거임.
          //-> 사과를 움직이지 않음.
          return;
        }
        // 사과를 움직였다면..
        const { apple, dragOffset } = dragAppleInfo;

        // 기존의 사과정보에 새로운 사과정보를 업데이트 할거임.
        const newApple = {};
        newApple.id = apple.id;
        newApple.sweetness = apple.sweetness;
        newApple.offset = apple.offset;

        // 드래그 했을때의 요소 위치를 보정하기 위해 저장합니다.
        newApple.position = {
          top: event.pageY - dragOffset.y,
          left: event.pageX - dragOffset.x,
        };

        // 기존의 사과 데이터를 새로운 사과의 데이터로 덮음.
        apples[newApple.id] = newApple;

        // state 가 바뀌며 App 컴포넌트가 새롭게 렌더링 됩니다.
        setApples({ ...apples });
      }}
    >
      <ul>{AppleList}</ul>
      <NewBtn onClick={showModal} />
      {isAddOpen && <NewAppleModal isOpen={isAddOpen} />}
    </div>
  );
}
export default App;
