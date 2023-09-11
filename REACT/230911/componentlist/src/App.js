import Hello from "./Components/Hello";
import Time from "./Components/Time";
import Resume from "./Components/Resume";
import ColorText from "./Components/ColorText";

import Moodlist from "./Components/Moodlist";
import ShowMood from "./Components/ShowMood";

export default function App() {
  return (
    <div>
      {/* <Hello name="효은" />
      <Time />
      <Resume
        hello="안녕하세요"
        name="개리"
        hobby="게임"
        food="고기"
        color="blue"
      />
      <ColorText color="red" />
      <ColorText color="green" />
      <ColorText color="blue" /> */}
      <h1>오늘의 기분을 선택해주세요😁</h1>
      <Moodlist />
      <ShowMood />
    </div>
  );
}
