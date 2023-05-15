import { combineReducers, legacy_createStore } from "redux";
import contentReduser from './contentReduser';
import messageReduser from './messageReduser';
import sidebarReduser from './sedibarReduser';

let reducers = combineReducers({
    contentPage: contentReduser,
    messagePage: messageReduser,
    sidebar: sidebarReduser
})

let store = legacy_createStore(reducers);
window.store = store;

export default store;