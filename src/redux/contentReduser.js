import { contentAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const CHANGE_INPUT_TEXT = 'CHANGE-INPUT-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let defaultData =
{
    posts:
        [{ id: "1", posts: "Give me good mood", like: "10" },
        { id: "2", posts: "My first post", like: "40" },
        { id: "3", posts: "I like bananas", like: "12" }],

    NewPostText: "hello! write something",
    profile: null,
    status: ""
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
        case SET_USER_STATUS: {
            return {...state, status: action.status}
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
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export const userProfileThunk = (userId) => {
    return (dispatch) => {
        usersAPI.userProfile(userId)
      .then((response) => {
        dispatch(setUserProfile(response.data));
      });
    }
}

export const getUserStatus = (status) => (dispatch) => {
        contentAPI.getStatus(status)
      .then((response) => {
        dispatch(setUserStatus(response.data));
      });
}


export const UpdateUserStatus = (status) => (dispatch) => {
        contentAPI.updateStatus(status)
      .then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
      });
    
}

export default contentReduser;
