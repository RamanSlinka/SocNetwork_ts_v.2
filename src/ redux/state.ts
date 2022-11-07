


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



export  const store  = {
    _state : {
        dialogsPage: {
            messages: messagesData,
            dialogs: dialogsData
        },
        profilePage: {
            posts: posts,
            newPostText: ''
        }
    },
    getState() {
      return this._state
    },
    _callSubscriber(_state: StateType){
        console.log(_state)
    },
    addPost () {
        const newPost = {
            message: this._state.profilePage.newPostText,
            likesCount: '0',
            id: 5
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state)
    },
    updateNewPostText  (newText: string)  {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    subscribe  (observer: (state:  StateType) => void) {
        this._callSubscriber = observer
    }
}