const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const CURRENT_PAGE = 'CURRENT_PAGE';
const SET_TOTAL_FRIENDS = 'SET_TOTAL_FRIENDS';

let defaultData = {
    users: [],
    pageSize: 5,
    totalFriendsCount: 20,
    currentPage: 1
}

const friendReduser = (state = defaultData, action) => {
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
        case SET_TOTAL_FRIENDS:
            return { ...state, totalFriends: action.count }
        default:
            return state;
    }
}

export const followActionCreator = (userId) => ({ type: FOLLOW, userId })
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users })
export const setCurrentPageAC = (currentPage) => ({ type: CURRENT_PAGE, currentPage })
export const setTotalFriendsAC = (totalFriends) => ({ type: SET_TOTAL_FRIENDS, count: totalFriends })
// export const currentPageActionCreator = (currentPage) => ({ type: CURRENT_PAGE, currentPage })
// export const setFriendsTotalCountAC = (totalFriendsCount) => ({ type: SET_TOTAL_FRIENDS_COUNT, count: totalFriendsCount })

export default friendReduser;