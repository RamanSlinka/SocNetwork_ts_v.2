import {combineReducers, createStore} from "redux";
import profileReducer, {ProfileActionType} from "./profileReducer";
import dialogReducer, {DialogActionType} from "./dialogReducer";
import userReducer, {UsersActionType} from "./usersReducer";
import authReducer, {AuthActionType} from "./authReducer";


export type ActionsType = ProfileActionType | DialogActionType | UsersActionType | AuthActionType
export type AppStateType = ReturnType<typeof RootReducers>

const RootReducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: userReducer,
    isAuth: authReducer
})


const store = createStore(RootReducers);

export default store;