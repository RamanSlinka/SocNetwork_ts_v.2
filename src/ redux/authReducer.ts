import {useDispatch} from "react-redux";
import {authAPI} from "../api/api";
import {AppThunkType} from "./redux-store";

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
type SetUserDataACType = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null) =>
    ({type: 'SET-USER-DATA', data: {userId, email, login}} as const)


// thunk
export const getAuthUserData = (): AppThunkType => (dispatch) => {
    authAPI.authMe()
        .then((data) => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setAuthUserData(id, email, login))
            }
        })
}

export default authReducer;