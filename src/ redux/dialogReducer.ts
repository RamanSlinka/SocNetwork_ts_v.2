import {ActionsType, DialogType, MessageType} from "./state";

export type DialogStateType ={
    messages: MessageType[]
    dialogs: DialogType[]
    newMessageText: string | undefined
}


const dialogReducer = (state: DialogStateType, action: ActionsType) => {

    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage = {
                id: '5',
                message: state.newMessageText
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newText
            return state;
        default:
            return state
    }

}
export default dialogReducer;


export type AddMessageActionType = ReturnType<typeof addMessage>
export type UpdateNewMessageActionType = ReturnType<typeof updateNewMessageText>

export type DialogActionType = AddMessageActionType | UpdateNewMessageActionType


export const addMessage = () => ({type: 'ADD-MESSAGE'} as const)
export const updateNewMessageText = (text: string | undefined) =>
    ({type: "UPDATE-NEW-MESSAGE-TEXT", newText: text} as const)