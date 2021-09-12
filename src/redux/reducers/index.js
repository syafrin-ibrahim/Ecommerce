import { combineReducers } from "redux";
import { userReducer } from "./user";
import { rajaOngkirReducer } from "./rajaongkir";
import { authReducer } from "./auth";
const reducers = combineReducers({ userReducer, rajaOngkirReducer, authReducer })

export default reducers