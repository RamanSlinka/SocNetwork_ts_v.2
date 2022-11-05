import React, {FC} from 'react';
import style from './profile.module.scss'
import MyPosts  from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";
import {PostType} from "../../ redux/state";




const Profile:FC<{posts: PostType[]}> = ({posts}) => {

    return (
        <div className={style.content}>
            <ProfileInfo/>
            <MyPosts posts={posts}/>

        </div>
    );
};

export default Profile;