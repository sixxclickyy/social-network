import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const CURRENT_PAGE = 'CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const IS_FETCHING_LOADER = 'IS_FETCHING_LOADER';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let State_defaultData = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const friendReduser = (state = State_defaultData, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return { ...state, users: action.users }
        case CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count }
        }
        case IS_FETCHING_LOADER: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setFriends = (users) => ({ type: SET_USERS, users })
export const setCurrent = (currentPage) => ({ type: CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const isFecthingLoader = (isFetching) => ({ type: IS_FETCHING_LOADER, isFetching })
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

export const getFriendsThunk = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(isFecthingLoader(true));
        usersAPI
            .getUsers(currentPage, pageSize)
            .then((data) => {
                dispatch(isFecthingLoader(false));
                dispatch(setFriends(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            });
    }
}

export const follow = (userID) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userID));
        usersAPI.follow(userID)
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userID));
                }
                dispatch(toggleFollowingProgress(false, userID));
            });
    }
}

export const unfollow = (userID) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userID));
        usersAPI.unfollow(userID)
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userID));
                }
                dispatch(toggleFollowingProgress(false, userID));
            });
    }
}

export default friendReduser;