const USER_DATA = 'USER_DATA';

let defaultData =
{
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReduser = (state = defaultData, action) => {
    switch (action.type) {
        case USER_DATA: {
            return {...state, ...action.data, isAuth: true}
        }
        default:
            return state;
    }
}

export const SetUserData = (id, email, login) => ({ type: USER_DATA, data: {id, email, login} })

export default authReduser;
