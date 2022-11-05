export type DialogType = {
    user: string
    id: string
}

export type MessageType = {
    message: string
    id: string
}

export type PostType = {
    message: string
    likesCount: string
    id: number
}

export type StateType = {
    dialogsPage: {
        messages: MessageType[]
        dialogs: DialogType[]
    }
    profilePage: {
        posts: PostType[]
    }
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

const posts = [
    {message: 'message 1', likesCount: '1', id: 1},
    {message: 'message 2', likesCount: '3', id: 2},
]

export  const state = {
    dialogsPage: {
        messages: messagesData,
        dialogs: dialogsData
    },
    profilePage: {
        posts: posts
    }
}