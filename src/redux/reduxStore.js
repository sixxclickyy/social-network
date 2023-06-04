import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import contentReduser from './contentReduser';
import messageReduser from './messageReduser';
import sidebarReduser from './sedibarReduser';
import friendReduser from "./friendsReduser";
import authReduser from "./authReduser";
import thunkMiddleware from "redux-thunk"
import formReduser from "./formReduser";

let reducers = combineReducers({
    profilePage: contentReduser,
    messagePage: messageReduser,
    sidebar: sidebarReduser,
    friendsPage: friendReduser,
    auth: authReduser,
    form: formReduser
})

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;