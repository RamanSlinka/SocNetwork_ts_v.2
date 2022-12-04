import React, {FC} from 'react';
import style from './profileInfo.module.scss'
import {useSelector} from "react-redux";
import {AppStateType} from "../../../ redux/redux-store";
import avatar from '../../../assets/images/no-avatar.jpg'
import {UserProfileType} from "../../../ redux/profileReducer";
import ProfileStatus from './ProfileStatus';

const ProfileInfo: FC = () => {

    const profile = useSelector<AppStateType, UserProfileType | null>(state => state.profilePage.userProfile)

    return (

        <div className={style.wrapper}>
            {profile &&
                <>
                    <div>
                      <img
                        src={profile.photos.large || avatar}
                        alt="avatar"
                        className={style.avatar}
                    />
                        <ProfileStatus status='Hello'/>
                    </div>
                    <div>
                        description:
                        <p> lookingForAJob:{profile.lookingForAJob}</p>
                        <p> lookingForAJobDescription: {profile.lookingForAJobDescription}</p>
                        <p>fullName: {profile.fullName}</p>
                        <div>
                            contacts:
                            <p>github: {profile.contacts.github}</p>
                            <p>vk: {profile.contacts.vk}</p>
                            <p>facebook: {profile.contacts.facebook}</p>
                            <p>instagram: {profile.contacts.instagram}</p>
                            <p>twitter: {profile.contacts.twitter}</p>
                            <p>website: {profile.contacts.website}</p>
                            <p>youtube: {profile.contacts.youtube}</p>
                            <p>mainLink: {profile.contacts.mainLink}</p>
                        </div>
                    </div>
                </>
            }


        </div>
    );
};

export default ProfileInfo;