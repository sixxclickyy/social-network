import { combineReducers, legacy_createStore } from "redux";
import contentReduser from './contentReduser';
import messageReduser from './messageReduser';
import sidebarReduser from './sedibarReduser';
import friendReduser from "./friendsReduser";

let reducers = combineReducers({
    profilePage: contentReduser,
    messagePage: messageReduser,
    sidebar: sidebarReduser,
    friendsPage: friendReduser
})

let store = legacy_createStore(reducers);
window.store = store;

export default store;