import React, {FC, useEffect} from 'react';
import style from './profile.module.scss'
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";
import {PostType, setProfile, setUserStatus, UserProfileType} from "../../ redux/profileReducer";
import {AppStateType} from "../../ redux/redux-store";
import {useDispatch, useSelector} from "react-redux";
import {Redirect, useParams} from "react-router-dom";

type ProfileType = {
    posts: PostType[]
    newPostText: string | undefined

}


const Profile: FC = () => {
    const {posts, newPostText} = useSelector<AppStateType, ProfileType>(state => state.profilePage)
    const profile = useSelector<AppStateType, UserProfileType | null>(state => state.profilePage.userProfile)
    const status = useSelector<AppStateType, string>(state => state.profilePage.status)
    const isAuth = useSelector<AppStateType, boolean>(state => state.isAuth.isAuth)
    const myUserId = useSelector<AppStateType, number | null>(state => state.isAuth.userId)


    const dispatch = useDispatch()
    const params = useParams<{ userId: string }>();


    useEffect(() => {
        if (!params.userId) {
            dispatch(setProfile(myUserId))
            dispatch(setUserStatus(myUserId))
        } else {
            dispatch(setProfile(+params.userId))
            dispatch(setUserStatus(+params.userId))
        }

    }, [status])


    if (!isAuth) {
        return <>
            <Redirect to={'/login'}/>
        </>
    }

    return (
        <div className={style.content}>
            <ProfileInfo profile={profile} status={status}/>
            <MyPosts posts={posts}
                     newPostText={newPostText}

            />

        </div>
    );
};

export default Profile;