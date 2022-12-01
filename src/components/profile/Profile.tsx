import React, {FC} from 'react';
import style from './profile.module.scss'
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";
import {PostType} from "../../ redux/profileReducer";
import {AppStateType} from "../../ redux/redux-store";
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";

type ProfileType = {
    posts: PostType[]

    newPostText: string | undefined

}


const Profile: FC = () => {
    const {posts, newPostText} = useSelector<AppStateType, ProfileType>(state => state.profilePage)
    const isAuth = useSelector<AppStateType, boolean>(state => state.isAuth.isAuth)


    if (!isAuth) {
        return <>
            <Redirect to={'/login'}/>
        </>
    }

    return (
        <div className={style.content}>
            <ProfileInfo/>
            <MyPosts posts={posts}
                     newPostText={newPostText}

            />

        </div>
    );
};

export default Profile;