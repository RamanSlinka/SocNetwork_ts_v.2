export type User = {
    followed: boolean
    id: number
    name: string
    photos: { small?: string | null, large?: string | null }
    status: string
    uniqueUrlName?: string | null
}

type UserStateType = {
    users: User[]
}

const initialState: UserStateType = {
    users: [
        {id: 1, followed: true, name: 'fullName', status: 'status', photos: {small: 'https://www.011global.com/Account/Slices/user-anonymous.png'}},
        {id: 2, followed: false, name: 'fullName2', status: 'status', photos: {small: null}},
        {id: 3, followed: true, name: 'fullName3', status: 'status', photos: {small: 'https://www.011global.com/Account/Slices/user-anonymous.png'}},
    ]
}

const userReducer = (state = initialState, action: UsersActionType): UserStateType => {
    switch (action.type) {
        case 'SET-USERS': {
            return {...state, users: [ ...action.users]}
        }
        case 'SET-FOLLOW-USER': {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                }),

            }
        }
        case 'SET-UNFOLLOW-USER' : {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }
        default :
            return state
    }

}


export type UsersActionType = SetUsersACType | SetFollowACType | SetUnfollowACType
type SetUsersACType = ReturnType<typeof setUsersAC>
type SetFollowACType = ReturnType<typeof setFollowedAC>
type SetUnfollowACType = ReturnType<typeof setUnfollowedAC>

export const setUsersAC = (users: any) => ({type: 'SET-USERS', users} as const)
export const setFollowedAC = (userId: number) => ({type: 'SET-FOLLOW-USER', userId} as const)
export const setUnfollowedAC = (userId: number) => ({type: 'SET-UNFOLLOW-USER', userId} as const)

export default userReducer;
