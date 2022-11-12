import {ActionsType, PostType} from "./state";


export type ProfileStateType = {
    posts: PostType[]
    newPostText: string | undefined

}


const profileReducer = (state: ProfileStateType, action: ActionsType) => {

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