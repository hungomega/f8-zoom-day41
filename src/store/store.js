import {
    legacy_createStore as createStore,
    applyMiddleware,
    combineReducers,
} from "redux";
import { thunk } from "redux-thunk";
import { logger } from "redux-logger";

// Reducers
import { reducer as productReducer } from "./product";
import { reducer as uiReducer } from "./ui";

const rootReducer = combineReducers({
    product: productReducer,
    ui: uiReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk, logger));
window.store = store;

export default store;
