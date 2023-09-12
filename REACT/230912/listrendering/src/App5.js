import React from "react";
import Detail from "./components/Detail";
import Question from "./components/Question";
import Review from "./components/Review";
import { useState } from "react";

const ContentsContainer = ({ listName }) => {
  if (listName === "detail") {
    return <Detail />;
  } else if (listName === "qa") {
    return <Question />;
  } else if (listName === "review") {
    return <Review />;
  }
};
const NavBar = () => {
  const [listName, setlistName] = useState("detail");

  // 클릭된 요소의 id가 바뀌고 listname이 바뀌게 된다.
  function checkId(event) {
    setlistName(event.target.id);
  }

  return (
    <>
      <nav>
        <ul>
          <li
            id="detail"
            style={
              listName === "detail" ? { color: "red" } : { color: "black" }
            }
            onClick={checkId}
          >
            상세 정보
          </li>
          <li
            id="qa"
            style={listName === "qa" ? { color: "red" } : { color: "black" }}
            onClick={checkId}
          >
            Q&A
          </li>
          <li
            id="review"
            style={
              listName === "review" ? { color: "red" } : { color: "black" }
            }
            onClick={checkId}
          >
            review
          </li>
        </ul>
      </nav>
      <ContentsContainer listName={listName} />
    </>
  );
};

function App5() {
  return (
    // && 연산자는 첫번째 falsy값을 반환하거나 마지막 truthy값을 반환한다.
    // || 연산자는 첫번째 truthy 값을 반환하거나 마지막 falsy 값을 반환합니다.
    <div>
      <NavBar />
    </div>
  );
}

export default App5;
