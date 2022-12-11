import React, {ChangeEvent, FC, useState} from 'react';
import { updateUserStatus} from "../../../ redux/profileReducer";
import {useDispatch} from "react-redux";

type ProfileStatusType = {
    status: string
}

const ProfileStatus: FC<ProfileStatusType> = ({status}) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    let [value, setValue] = useState<string>(status)
    const dispatch = useDispatch()


    const activateStatusBar = () => {
        setEditMode(true)
    }

    const deActivateStatusBar = () => {
        setEditMode(false)
        dispatch(updateUserStatus(value))
    }

    const changeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        value = e.currentTarget.value
        setValue(value)
    }
    return (
        <>
            {!editMode
                ? <div>
                    <span onDoubleClick={activateStatusBar}>Status: {status}</span>
                </div>
                : <div>
                    <input
                        value={value}
                        onBlur={deActivateStatusBar}
                        onChange={changeStatusHandler}
                        autoFocus={true}
                        type="text" placeholder='Enter your status'/>
                </div>
            }

        </>
    );
};

export default ProfileStatus;