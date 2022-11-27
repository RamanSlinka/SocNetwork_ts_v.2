type InitialStateType = {
    userId: null | number
    email: null | string
    login: null | string
    isAuth: boolean
}

let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action: AuthActionType): InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA" : {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state
    }
}

export type AuthActionType = SetUserDataACType
type SetUserDataACType = ReturnType<typeof setUserData>

export const setUserData = (userId: number | null, email: string | null, login: string | null) =>
    ({type: 'SET-USER-DATA', data: {userId, email, login}} as const)


export default authReducer;