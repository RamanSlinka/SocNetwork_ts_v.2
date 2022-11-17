import {combineReducers, createStore} from "redux";
import profileReducer, {ProfileActionType} from "./profileReducer";
import dialogReducer, {DialogActionType} from "./dialogReducer";
import userReducer, {UsersActionType} from "./usersReducer";


export type ActionsType = ProfileActionType | DialogActionType | UsersActionType
export type AppStateType = ReturnType<typeof RootReducers>

const RootReducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: userReducer
})


const store = createStore(RootReducers);

export default store;