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
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

const initialState: UserStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1
}

const userReducer = (state = initialState, action: UsersActionType): UserStateType => {
    switch (action.type) {
        case 'SET-USERS': {
            return {...state, users: [...action.users]}
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
        case 'SET-TOTAL-USERS-COUNT' : {
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }
        case "SET-CURRENT-PAGE": {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        default :
            return state
    }

}


export type UsersActionType = SetUsersACType
    | SetFollowACType
    | SetUnfollowACType
    | SetTotalUsersCountACType
    | SetCurrentPageACType

type SetUsersACType = ReturnType<typeof setUsersAC>
type SetFollowACType = ReturnType<typeof setFollowedAC>
type SetUnfollowACType = ReturnType<typeof setUnfollowedAC>
type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>

export const setUsersAC = (users: any) => ({type: 'SET-USERS', users} as const)
export const setFollowedAC = (userId: number) => ({type: 'SET-FOLLOW-USER', userId} as const)
export const setUnfollowedAC = (userId: number) => ({type: 'SET-UNFOLLOW-USER', userId} as const)
export const setTotalUsersCountAC = (totalCount: number) => ({type: 'SET-TOTAL-USERS-COUNT', totalCount} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)

export default userReducer;
