import React, {FC} from 'react';
import style from './profileInfo.module.scss'
import avatar from '../../../assets/images/no-avatar.jpg'
import ProfileStatus from './ProfileStatus';
import {UserProfileType} from "../../../ redux/profileReducer";

type ProfileInfoType = {
    profile: UserProfileType | null
    status: string
}

const ProfileInfo: FC<ProfileInfoType> = ({profile, status}) => {



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
                        <ProfileStatus status={status}/>
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