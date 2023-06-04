const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_MESSAGE_INPUT_TEXT = 'CHANGE-MESSAGE-INPUT-TEXT';
let defaultData = {
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
}

const messageReduser = (state = defaultData, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: "5",
                text: action.newMessageText
            }
            let newCopyState = { ...state };
            newCopyState.messages = [...state.messages];
            newCopyState.messages.push(newMessage);
            return newCopyState;
        }
        case CHANGE_MESSAGE_INPUT_TEXT:
            {
                let newCopyState = { ...state };
                newCopyState.newMessageText = [...state.newMessageText]
                newCopyState.newMessageText = action.text;
                return newCopyState;
            }
        default:
            return state;
    }
}

export const addMessageActionCreator = (newMessageBody) => ({ type: ADD_MESSAGE, newMessageBody })

export const onChangeMessageActionCreator = (text) => ({
    type: CHANGE_MESSAGE_INPUT_TEXT,
    text: text
})

export default messageReduser;