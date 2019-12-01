import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";

import reducers from "./rootReducer";

const enhancer = composeWithDevTools(applyMiddleware(ReduxThunk));

const store = createStore(reducers, enhancer);

export default store;
