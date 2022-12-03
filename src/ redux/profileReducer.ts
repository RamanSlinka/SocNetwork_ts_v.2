import {AppThunkType} from "./redux-store";
import {profileAPI} from "../api/api";


export type PostType = {
    message: string | undefined
    likesCount: string
    id: number
}

export type UserProfileType = {
    aboutMe: string | null
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    userId: number
    photos: {
        small: string | null
        large: string | null
    }
}


type InitialStateType = {
    posts: PostType[]
    newPostText: string | undefined
    userProfile: UserProfileType | null
}

const posts = [
    {message: 'message 1', likesCount: '1', id: 1},
    {message: 'message 2', likesCount: '3', id: 2},
]

const initialState: InitialStateType = {
    posts: posts,
    newPostText: '',
    userProfile: null
}

const profileReducer = (state = initialState, action: ProfileActionType): InitialStateType => {

    switch (action.type) {
        case 'ADD-POST': {
            const newPost = state.newPostText
            return {
                ...state,
                newPostText: '',
                posts: [
                    {message: newPost, likesCount: '0', id: 5},
                    ...state.posts]
            };
        }

        case 'UPDATE-NEW-POST-TEXT': {
            return {...state, newPostText: action.newText};
        }
        case "SET-USER-PROFILE":
            return {
                ...state,
                userProfile: action.profile
            }

        default:
            return state
    }
}
export default profileReducer;


export type AddPostACType = ReturnType<typeof addPost>
export type UpdateNewPostTextACType = ReturnType<typeof updateNewPostText>
export type SetUserProfileACType = ReturnType<typeof setUserProfileAC>

export type ProfileActionType = AddPostACType
    | UpdateNewPostTextACType
    | SetUserProfileACType

export const addPost = () => ({type: 'ADD-POST'} as const);
export const updateNewPostText = (text: string | undefined) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text} as const);
export const setUserProfileAC = (profile: UserProfileType) => ({type: 'SET-USER-PROFILE', profile} as const)


//thunk

export const setProfile = (userId: number | null): AppThunkType => (dispatch) => {
   // debugger
    profileAPI.getProfile(userId)
        .then((data) => {
            dispatch(setUserProfileAC(data))

        })
}