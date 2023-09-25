import InputComponent from "./components/InputComponent";
import SomethingComponent from "./components/SomethingComponent";
import useMouseLocation from "./hooks/useMouseLocation";
import useScroll from "./hooks/useScroll";

function App() {
  const mouseLocation = useMouseLocation();
  const isBottom = useScroll();
  console.log(isBottom);
  return (
    <div style={{ height: 3000 }}>
      <div
        style={{
          height: 100,
          width: 100,
          backgroundColor: mouseLocation.x > 100 ? "royalblue" : "pink",
        }}
      >
        mouse 움직여보세요
      </div>
      <InputComponent />
      <SomethingComponent />
    </div>
  );
}
export default App;
