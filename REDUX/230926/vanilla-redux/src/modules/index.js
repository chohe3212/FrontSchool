// 두가지 리듀서를 합쳐줄거임.

import goodsReducer from "./goodsCounter";
import stockReducer from "./stockCounter";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  goodsReducer,
  stockReducer,
});

export default rootReducer;
