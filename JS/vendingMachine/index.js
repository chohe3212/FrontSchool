import ColaGenerator from "./js/colaGenerator.js";
import VendingMachineFunc from "./js/vendingMachineFunc.js";

const colaGenerator = new ColaGenerator(); // colagenerator를 통해 인스턴스 생성.
//console.log(await colaGenerator.loadData());
// async 없이도 await 사용 가능.
// top-level await 참고 : https://v8.dev/features/top-level-await

await colaGenerator.setup();

const vendingMacine = new VendingMachineFunc();
vendingMacine.setup();
