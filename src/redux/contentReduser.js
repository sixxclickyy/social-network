const ADD_POST = 'ADD-POST';
const CHANGE_INPUT_TEXT = 'CHANGE-INPUT-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let defaultData =
{
    posts:
        [{ id: "1", posts: "Give me good mood", like: "10" },
        { id: "2", posts: "My first post", like: "40" },
        { id: "3", posts: "I like bananas", like: "12" }],

    NewPostText: "hello! write something",
    profile: null
};

const contentReduser = (state = defaultData, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: "5",
                posts: state.NewPostText,
                like: "18"
            }
            let stateCopy = {...state}; 
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.NewPostText = "";
            return stateCopy;
        }
        case CHANGE_INPUT_TEXT: {
            let stateCopy = {...state}; 
            stateCopy.posts = [...state.posts];
            stateCopy.NewPostText = action.text;
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export const addPosatActionCreator = () => ({ type: ADD_POST })
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const onChangeActionCreator = (text) => ({
    type: CHANGE_INPUT_TEXT,
    text: text
})

export default contentReduser;
