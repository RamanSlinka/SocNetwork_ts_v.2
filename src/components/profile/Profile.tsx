import React, {FC} from 'react';
import style from './profile.module.scss'
import MyPosts  from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";
import {ActionsType, PostType} from "../../ redux/state";

type ProfileType = {
    posts: PostType[]
    dispatch: (action: ActionsType) => void
    newPostText: string | undefined

}


const Profile:FC<ProfileType> = ({posts, dispatch, newPostText}) => {

    return (
        <div className={style.content}>
            <ProfileInfo/>
            <MyPosts posts={posts}
                     dispatch={dispatch}
                     newPostText={newPostText}

            />

        </div>
    );
};

export default Profile;