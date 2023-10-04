import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: "change to blue!" });
  // wai area : div는 의미가 없지만 이 role을 통해 역할을 부여해준다.
  // 주의할 점: 시멘틱한 태그 사용을 권장한다.
  // role로 요소를 찾을 수 있고,
  expect(button).toHaveStyle({ backgroundColor: "red" });
  // 기대한 스타일을 입력할수 있다.

  fireEvent.click(button);
  expect(button.textContent).toBe("change to red!");
});
