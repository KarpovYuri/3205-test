import { combineReducers } from "redux";
import defineCurrency from './defineCurrency';
import getRates from './getRates';

const rootReducer = combineReducers({ defineCurrency, getRates });

export default rootReducer;
