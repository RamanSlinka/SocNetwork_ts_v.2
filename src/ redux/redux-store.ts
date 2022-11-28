import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {ProfileActionType} from "./profileReducer";
import dialogReducer, {DialogActionType} from "./dialogReducer";
import userReducer, {UsersActionType} from "./usersReducer";
import authReducer, {AuthActionType} from "./authReducer";
import thunk, {ThunkAction} from "redux-thunk";


export type ActionsType = ProfileActionType
    | DialogActionType
    | UsersActionType
    | AuthActionType

export type AppStateType = ReturnType<typeof RootReducers>

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType,
    AppStateType,
    unknown,
    ActionsType>

const RootReducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: userReducer,
    isAuth: authReducer
})


const store = createStore(RootReducers, applyMiddleware(thunk));

export default store;