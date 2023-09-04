class ColaGenerator {
  constructor() {
    // 콜라 리스트를 찾아서 돔에 할당해줌.
    this.itemList = document.querySelector(".cola-list");
  }

  async setup() {
    const response = await this.loadData();
    this.colaFactory(response);
  }

  async loadData() {
    try {
      const response = await fetch("./items.json"); // items.json에 있는 데이터를 가져와 동적으로 제어하기 위해,
      console.log(response); // fetch가 끝나고 response에 어떤 값이 들어왔지?

      if (!response.ok) {
        throw new Error("HTTP ERROR!! : " + response.status);
      }
      return await response.json(); // 비동기이기에
    } catch (error) {
      console.log(
        "콜라 데이터를 로딩하는 중에 에러가 발생했습니다! error: " + error
      );
    }
  }
  colaFactory(data) {
    // 받는 데이터는 배열임. // 받은 배열을 하나씩 템플릿화 하면 되겟지?

    const docFrag = new DocumentFragment(); // 아이템들을 fragment에 붙이고 fragment만 보여주면 렌더링이 효율적으로 됨.

    data.forEach((el) => {
      const item = document.createElement("li"); // 요소 추가
      const itemTemplate = `<button type="button" class="btn-cola on">
              <img src="./img/cola-original.png" alt="" />
              <span class="cola-name">Original_Cola</span>
              <strong class="cola-price">1000원</strong>
            </button>`;
      item.innerHTML = itemTemplate;
      docFrag.append(item); // 데이터 배열을 순회하며 template를 생성하고 li에 붙게됨.
    });

    this.itemList.append(docFrag);
  }
}

// export : 빼낼거야
// default : 유일한 ColaGenerator만.
export default ColaGenerator;
