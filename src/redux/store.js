import contentReduser from "./contentReduser";
import messageReduser from "./messageReduser";
import sidebarReduser from "./sedibarReduser";

let store = {

    getState() {
        return this._state;
    },

    _Index() {
        console.log("changed")
    },

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

    addPost() {
        debugger;
        let newPost = {
            id: "5",
            posts: this._state.contentPage.NewPostText,
            like: "18"
        }
        this._state.contentPage.posts.push(newPost);
        this._state.contentPage.NewPostText = "";
        this.Index(this._state);
    },

    addNewMessage() {
        let newMessage = {
            id: 5,
            text: this._state.messagePage.newMessageText
        }

        this._state.messagePage.messages.push(newMessage);
        this._state.messagePage.newMessageText = "";
        this.Index(this._state);
    },

    ChangeMessageInputText(text) {
        this._state.messagePage.newMessageText = text;
        this.Index(this._state);
    },

    ChangeInputText(text) {
        this._state.contentPage.NewPostText = text;
        this.Index(this._state);
    },

    subscribe(observer) {
        this.Index = observer;
    },

    dispatch(action) {
        this._state.contentPage = contentReduser(this._state.contentPage, action);
        this._state.messagePage = messageReduser(this._state.messagePage, action);
        this._state.sidebar = sidebarReduser(this._state.sidebar);

        this.Index(this._state, action);
    }
}

export default store;