import {combineReducers, createStore} from "redux";
import profileReducer, {ProfileActionType} from "./profileReducer";
import dialogReducer, {DialogActionType} from "./dialogReducer";


export type ActionsType = ProfileActionType | DialogActionType
export type AppStateType = ReturnType<typeof RootReducers>

const RootReducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer
})


const store = createStore(RootReducers);

export default store;