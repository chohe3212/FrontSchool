import "./App.css";
import ListRender from "./List";
import TodayDate from "./TodayDate";

function App() {
  return (
    <div>
      <p>hello world</p>
      <h1 className="newClass">
        안녕~!~! 내이름은 조효은 <br />
        {[1, 2, 3, 4].map((x) => `${x}의 3제곱 : ${x ** 3} , `)}
      </h1>
      <input type="text" style={{ backgroundColor: "red" }} />

      <TodayDate />
      <ListRender />
    </div>
  );
}

export default App;
