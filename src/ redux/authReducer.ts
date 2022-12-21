import {authAPI} from "../api/api";
import {AppThunkType} from "./redux-store";

type InitialStateType = {
    userId: null | number
    email: null | string
    login: null | string
    isAuth: boolean
    captchaUrl: null | string
}

let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state = initialState, action: AuthActionType): InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA" : {
            return {
                ...state,
                ...action.payload
            }
        }

        default:
            return state
    }
}

export type AuthActionType = SetUserDataACType
type SetUserDataACType = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) =>
    ({type: 'SET-USER-DATA', payload: {userId, email, login, isAuth}} as const)


// thunk
export const getAuthUserData = (): AppThunkType => (dispatch) => {
    authAPI.authMe()
        .then((data) => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}

export const login = (email: string, password: string, rememberMe: boolean): AppThunkType =>
    (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(getAuthUserData())
                }
            })
    }

export const logout = (): AppThunkType => (dispatch) => {
    authAPI.logout()
        .then((res) => {
                if (res.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            }
        )
}

export default authReducer;