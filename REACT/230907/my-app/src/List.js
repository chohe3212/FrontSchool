import "./App.css";

const list = [
  { no: 1, area: "대전", visited: false },
  { no: 2, area: "부산", visited: true },
  { no: 3, area: "목포", visited: false },
  { no: 4, area: "제주도", visited: false },
];

function ListRender() {
  return (
    <section className="list">
      {list.map((v) => {
        // index로 key props를 항상 사용하지 않는다.

        //
        // 왜냐? 지금은 설명 안해줌..ㅜㅜ 아마 성능저하??
        if (v.visited === true) {
          return (
            <li key={v.no} className="visited">
              {v.no}. {v.area}
            </li>
          );
        } else
          return (
            <li key={v.no}>
              {v.no}. {v.area}
            </li>
          );
      })}
    </section>
  );
}
export default ListRender;
