import React, {FC} from 'react';
import style from './profile.module.scss'
import MyPosts  from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";
import {PostType, updateNewPostText} from "../../ redux/state";

type ProfileType = {
    posts: PostType[]
    addPost: () => void
    newPostText: string
    updateNewPostText: (text: string) => void
}


const Profile:FC<ProfileType> = ({posts, addPost, newPostText, updateNewPostText}) => {

    return (
        <div className={style.content}>
            <ProfileInfo/>
            <MyPosts posts={posts}
                     addPost={addPost}
                     newPostText={newPostText}
                     updateNewPostText={updateNewPostText}
            />

        </div>
    );
};

export default Profile;