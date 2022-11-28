import React, {FC, useEffect} from 'react';
import style from './profileInfo.module.scss'
import {setProfile} from "../../../ redux/profileReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../ redux/redux-store";



type photos = {
    small: string | null
    large: string | null
}
type ProfileInfoType = {
    userId: number | null
    lookingForAJob: boolean | null
    lookingForAJobDescription: string | null
    fullName: string | null
    contacts: contacts
    photos: photos
}
type contacts = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}



const ProfileInfo: FC = () => {
    const avatar = 'https://ava-24.com/_ph/146/479768406.jpg'

    const profile = useSelector<AppStateType, ProfileInfoType | null>(state => state.profilePage.userProfile)

    const dispatch = useDispatch()


    useEffect(() => {

        const userId =profile && profile.userId
        dispatch(setProfile(userId))

        console.log(profile)
        console.log(userId)
    }, [])



    return (

        <div className={style.wrapper}>
            {profile &&
                <>
                    <div><img
                        src={avatar}
                        alt="avatar"
                        className={style.avatar}
                    />
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