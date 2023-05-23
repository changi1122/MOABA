import { combineReducers } from "redux";
import {counter} from "./counter";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const rootReducer = combineReducers({
    counter
});

const persisConfig ={
    key:'root',
    storage
}

const persistReduce = persistReducer( persisConfig, rootReducer);

export default persistReduce;

