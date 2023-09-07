import "./App.css";

function TodayDate() {
  const today = new Date();

  return (
    <div>
      <section className="newClass">
        <h1 className="red">년 : {today.getFullYear()}</h1>
        <h1>
          월/일 : {today.getMonth() + 1}/{today.getDate()}
        </h1>
        <h1>
          시간 : {today.getHours()}시 {today.getMinutes()}분{" "}
          {today.getSeconds()}초
        </h1>
      </section>
    </div>
  );
}

export default TodayDate;
