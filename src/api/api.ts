import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': 'e98254e3-f006-4d39-b52d-ad99d83a542e'}
})

export const userAPI = {

    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => {
                return res.data
            })
    },
    deleteFriend(id: number) {
        return instance.delete(`follow/ ${id}`)
            .then(res => {
                return res.data
            })
    },
    addFriend(id: number) {
        return instance.post(`follow/ ${id}`)
            .then(res => {
                return res.data
            })
    }

}

export const profileAPI = {
    getProfile(userId: number | null) {
        return instance.get(`profile/` + userId)
            .then(res => {
                return res.data
            })
    }
}


export const authAPI = {
    authMe() {
        return instance.get('auth/me')
            .then(res => {
                return res.data
            })
    }
}

