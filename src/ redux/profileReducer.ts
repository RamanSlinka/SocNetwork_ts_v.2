
// export type ProfileStateType = {
//     posts: PostType[]
//     newPostText: string | undefined
// }

export type PostType = {
    message: string | undefined
    likesCount: string
    id: number
}

type InitialStateType = {
    posts: PostType[]
    newPostText: string | undefined
}

const posts = [
    {message: 'message 1', likesCount: '1', id: 1},
    {message: 'message 2', likesCount: '3', id: 2},
]

const initialState: InitialStateType = {
    posts: posts,
    newPostText: ''
}

const profileReducer = (state= initialState, action: ProfileActionType): InitialStateType => {

    switch (action.type) {
        case 'ADD-POST':
            const newPost = {
                message: state.newPostText,
                likesCount: '0',
                id: 5
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            return state;
        default:
            return state
    }
}
export default profileReducer;


export type AddPostACType = ReturnType<typeof addPost>
export type UpdateNewPostTextACType = ReturnType<typeof updateNewPostText>

export type ProfileActionType = AddPostACType | UpdateNewPostTextACType

export const addPost = () => ({type: 'ADD-POST'} as const);
export const updateNewPostText = (text: string | undefined) =>
    ({type: 'UPDATE-NEW-POST-TEXT', newText: text} as const);