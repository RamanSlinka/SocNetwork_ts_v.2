import React, {ChangeEvent, FC, useState} from 'react';

type ProfileStatusType = {
    status: string
}

const ProfileStatus: FC<ProfileStatusType> = ({status}) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [value, setValue] = useState<string >(status)

    const activateStatusBar = () => {
        setEditMode(true)
    }

    const deActivateStatusBar = () => {
        setEditMode(false)
    }

    const changeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <>
            {!editMode
                ? <div>
                    <span onDoubleClick={activateStatusBar}>Status: {status}</span>
                </div>
                : <div>
                    <input
                        value={status}
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