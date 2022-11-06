


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
        newPostText: string
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



let rerenderEntireTree = (state: StateType) => {
    console.log('kjh')
}

export const state = {
    dialogsPage: {
        messages: messagesData,
        dialogs: dialogsData
    },
    profilePage: {
        posts: posts,
        newPostText: ''
    }
}


export const addPost = () => {
    const newPost = {
        message: state.profilePage.newPostText,
        likesCount: '0',
        id: 5
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText: string) => {
 state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}


export const subscribe = (observer: (state:  StateType) => void) => {
    rerenderEntireTree = observer
}