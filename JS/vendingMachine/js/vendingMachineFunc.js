class VendingMachineFunc {
  constructor() {
    const vMachine = document.querySelector(".section1");
    this.balance = vMachine.querySelector(".bg-box p"); // 잔액
    this.itemList = vMachine.querySelector(".cola-list");
    this.inputCostEl = vMachine.querySelector("#input-money");
    this.btnPut = vMachine.querySelector("#input-money + .btn");
    this.btnReturn = vMachine.querySelector(".bg-box + .btn");
    this.btnGet = vMachine.querySelector(".btn-get");
    this.stagedList = vMachine.querySelector(".get-list");

    // section2 요소 선택
    const myInfo = document.querySelector(".section2");
    this.myMoney = myInfo.querySelector(".bg-box p");

    // section3 요소 선택
    const getInfo = document.querySelector(".section3");
    this.getList = getInfo.querySelector(".get-list");
    this.txtTotal = getInfo.querySelector(".total-price");
  }

  setup() {
    this.bindEvents();
  }

  // 장바구니에 선택한 콜라의 목록을 생성
  stagedItemGenerator(target) {
    // 사용자가 클릭한 버튼
    const stagedItem = document.createElement("li");
    stagedItem.dataset.item = target.dataset.item;
    stagedItem.dataset.img = target.dataset.img;
    stagedItem.dataset.price = target.dataset.price;
    stagedItem.innerHTML = `
        <img src="./img/${target.dataset.img}" alt="${target.dataset.img}" />
        ${target.dataset.item}
        <strong>
          1
          <span class="a11y-hidden">개</span>
        </strong>`;
    this.stagedList.append(stagedItem);
  }

  // 이벤트를 붙인다.
  bindEvents() {
    /**
     * 1. 입금버튼 기능
     * 소지금 === 소지금 - 입금액
     * 잔액 === 기존의 잔액 + 입금액
     * 소지금 < 입금액 -> 소지금이 부족합니다. 라는 경고창을 띄운다.
     * 입금액 input은 초기화.
     *
     * 이렇게 내가 구현해야할 기능들을 작성한 후 코딩을 해라.
     */
    this.btnPut.addEventListener("click", (event) => {
      const inputCost = parseInt(this.inputCostEl.value);
      const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(",", ""));
      const balanceVal = parseInt(this.balance.textContent.replaceAll(",", ""));

      // 사용자가 입력한 값이 있는지 없는지 검사함
      if (inputCost) {
        if (inputCost <= myMoneyVal && inputCost > 0) {
          // 소지금에서 돈을 뺄 수 있는 상황 : 입금액이 존재하고, 소지금보다 적거나 같다면.
          this.myMoney.textContent =
            new Intl.NumberFormat().format(myMoneyVal - inputCost) + " 원";
          // 나라별 화폐 기준에 맞춰 바꿔준다.
          // this.myMoney값이 언제 바뀔지 모르기에.

          this.balance.textContent =
            Intl.NumberFormat().format(
              (balanceVal ? balanceVal : 0) + inputCost
            ) + " 원";

          // 입력창 초기화
        } else {
          alert("소지금이 부족합니다!");
        }
        this.inputCostEl.value = "";
      }
    });

    /** 2. 거스름돈 반환 기능 만들기
     * 반환 버튼을 누르면 소지금 === 소지금 + 잔액
     * 잔액창 초기화
     *
     */
    this.btnReturn.addEventListener("click", () => {
      // 현재 사용자의 돈
      const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(",", ""));
      // 현재 자판기 잔액
      const balanceVal = parseInt(this.balance.textContent.replaceAll(",", ""));

      if (balanceVal) {
        this.myMoney.textContent =
          new Intl.NumberFormat().format(myMoneyVal + balanceVal) + " 원";
        this.balance.textContent = null;
      }
    });

    /**
     * 3. 자판기 메뉴 기능 (콜라들을 눌렀을때 기능)
     * 잔액에서 고른 콜라의 금액만큼 차감됨.
     * 고른 콜라 아이템이 장바구니에 추가됨.
     * 콜라의 금액보다 잔액이 부족하면 경고창 출력함.
     * 콜라의 data-count 값은 -1을 함.
     * 만약 data-count 값이 0이라면 button요소에 disabled 속성이 추가되고, 콜라템플릿에 strong 태그가 추가되어야 합니다.
     * 클릭되면 클래스에 on을 추가해야함.
     */

    const colaBtns = this.itemList.querySelectorAll("button");

    console.log(colaBtns);

    colaBtns.forEach((colaBtn) => {
      colaBtn.addEventListener("click", (event) => {
        const balanceVal = parseInt(
          this.balance.textContent.replaceAll(",", "")
        ); // 현재 잔액
        const targetElprice = parseInt(colaBtn.dataset.price); // 클릭한 콜라의 가격
        const stagedListItem = this.stagedList.querySelectorAll("li");
        let isStaged = false;

        if (balanceVal >= targetElprice) {
          // 잔액이 콜라 가격보다 많거나 동일하다면 음료를 뽑을 수 있음.
          this.balance.textContent =
            new Intl.NumberFormat().format(balanceVal - targetElprice) + " 원"; // 돈 차감하기.

          for (const item of stagedListItem) {
            //  원하는 순간에 순회를 멈추고 싶음.
            // forEach는 break나 return 사용이 안되기에 forEach 대신에 for of를 사용.

            if (item.dataset.item === colaBtn.dataset.item) {
              // 선택한 콜라가 이미 장바구니에 존재하는 경우 -> 갯수가 증가해야함. <strong>
              const itemTxt = item.querySelector("strong");
              itemTxt.firstChild.textContent =
                parseInt(itemTxt.firstChild.textContent) + 1;
              isStaged = true;
              break;
            }
          }

          // 콜라를 장바구니에 담기.
          if (!isStaged) {
            this.stagedItemGenerator(colaBtn);
          }
          colaBtn.dataset.count--;

          // 만약 콜라 갯수(count) 가 0이 되는순간 품절
          if (parseInt(colaBtn.dataset.count) == 0) {
            // disabled 추가, 품절처리 코드 추가
            colaBtn.disabled = "disabled";
            colaBtn.insertAdjacentHTML(
              "afterbegin",
              `<strong class="soldout">품절</strong>`
            );
          }
        } else {
          alert("잔액이 부족합니다. 돈을 더 입금해주세요.");
        }
      });
    });

    /**
     * 4. 획득 버튼 기능
     * 획득 버튼을 누르면 선택한 음료수 목록이 음료 목록으로 이동한다.
     * 획득한 음료의 금액을 모두 합하여 총 금액을 업데이트 합니다.
     */
    this.btnGet.addEventListener("click", () => {
      const itemStagedList = this.stagedList.querySelectorAll("li");
      const itemGetList = this.getList.querySelectorAll("li");
      let totalPrice = 0;
      // 장바구니 콜라들을 획득한 리스트로 옮김.
      //this.getList.append(...itemStagedList);

      // 이미 획득한게 있으면 count만 올려줌.
      // 아니면 새로 추가
      for (const itemStaged of itemStagedList) {
        let isStaged = false;

        for (const itemGet of itemGetList) {
          if (itemStaged.dataset.item === itemGet.dataset.item) {
            // 장바구니에 콜라가 이미 획득 리스트에 잇다면
            const itemTxt = itemGet.querySelector("strong");
            itemTxt.firstChild.textContent =
              parseInt(itemTxt.firstChild.textContent) +
              parseInt(
                itemStaged.querySelector("strong").firstChild.textContent
              );
            isStaged = true;
            break;
          }
        }
        //획득 리스트에 없는 새로운 콜라가 추가 됐다면
        if (!isStaged) {
          this.getList.append(itemStaged);
        }
      }
      // 장바구니 목록 초기화
      this.stagedList.innerHTML = null;

      // 총 금액 보여주기.
      this.getList.querySelectorAll("li").forEach((itemGet) => {
        totalPrice +=
          parseInt(itemGet.dataset.price) *
          parseInt(itemGet.querySelector("strong").firstChild.textContent);
      });

      this.txtTotal.textContent = `총 금액 : ${new Intl.NumberFormat().format(
        totalPrice
      )} 원`;
    });
  }
}

export default VendingMachineFunc;
