import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "5ee15a04-4613-4dba-beda-ecea20fa17af"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },

    auth_me() {
        return instance.get('auth/me')
            .then(response => {
                return response.data;
            })
    },

    userProfile(userID) {
        console.warn('Obsolete method. Please profileAPI object.')
        return contentAPI.userProfile(userID)
    },

    follow(userID) {
        return instance.post(`follow/` + userID)
    },

    unfollow(userID) {
        return instance.delete(`follow/` + userID)
    }
}

export const contentAPI = {
    userProfile(userID) {
        return instance.get(`profile/${userID}`)
    },

    getStatus(userID) {
        return instance.get(`profile/status/${userID}`)
    },

    updateStatus(status) {
        return instance.put(`profile/status`, { status });
    }
}