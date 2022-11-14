

export type DialogType = {
    user: string
    id: string
}

export type MessageType = {
    message: string | undefined
    id: string
}

export type DialogStateType ={
    messages: MessageType[]
    dialogs: DialogType[]
    newMessageText: string | undefined
}


const dialogsData = [
    {user: 'User1', id: '1'},
    {user: 'User2', id: '2'},
    {user: 'User3', id: '3'},
]
const messagesData = [
    {message: 'message1', id: '1'},
    {message: 'message2', id: '2'},
    {message: 'message3', id: '3'},
]

const initialState: DialogStateType = {
    messages: messagesData,
    dialogs: dialogsData,
    newMessageText: ''
}


const dialogReducer = (state=initialState , action: DialogActionType): DialogStateType => {

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