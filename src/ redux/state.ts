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

export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    getState: () => StateType
    subscribe: (callback: () => void) => void
    dispatch: (action: Actions) => void
}

export type Actions = AddPostActionType | UpdateNewPostActionType

type AddPostActionType = {
    type: 'ADD-POST'
}

type UpdateNewPostActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string | undefined
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


export const store = {
    _state: {
        dialogsPage: {
            messages: messagesData,
            dialogs: dialogsData
        },
        profilePage: {
            posts: posts,
            newPostText: ''
        }
    },
    _callSubscriber(_state: StateType) {
        console.log(_state)
    },

    getState() {
        return this._state
    },
    subscribe(observer: (state: StateType) => void) {
        this._callSubscriber = observer
    },

    dispatch(action: any) {
        if (action.type === 'ADD-POST') {
            const newPost = {
                message: this._state.profilePage.newPostText,
                likesCount: '0',
                id: 5
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }
}


type AddPostACType = { type: 'ADD-POST' }
type UpdateNewPostTextACType = { type: 'UPDATE-NEW-POST-TEXT', newText: string | undefined }

export type ActionsType = AddPostACType | UpdateNewPostTextACType

export const addPost = (): AddPostACType => ({type: 'ADD-POST'} as const)
export const updateNewPostText = (text: string | undefined): UpdateNewPostTextACType =>
    ({type: 'UPDATE-NEW-POST-TEXT', newText: text})