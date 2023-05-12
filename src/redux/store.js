import contentReduser from "./contentReduser";
import messageReduser from "./messageReduser";
import sidebarReduser from "./sedibarReduser";

let store = {
    _state: {
        contentPage: {
            posts:
                [{ id: "1", posts: "Give me good mood", like: "10" },
                { id: "2", posts: "My first post", like: "40" },
                { id: "3", posts: "I like bananas", like: "12" }],

            NewPostText: "hello! write something"
        },

        messagePage: {
            messages:
                [{ id: 1, text: "Hello world!" },
                { id: 2, text: "Hello world!" },
                { id: 3, text: "Hello world!" },
                { id: 4, text: "Hello world!" },],

            people:
                [{ id: 1, name: "Helen" },
                { id: 2, name: "Timur" },
                { id: 3, name: "Natalia" },
                { id: 4, name: "Maria" },
                ],

            newMessageText: "Hello! Write a message"
        },

        sidebar: {}
    },

    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.contentPage = contentReduser(this._state.contentPage, action);
        this._state.messagePage = messageReduser(this._state.messagePage, action);
        this._state.sidebar = sidebarReduser(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;
