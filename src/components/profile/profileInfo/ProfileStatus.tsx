import React, {FC, useState} from 'react';

type ProfileStatusType = {
    status: string
}

const ProfileStatus: FC<ProfileStatusType> = ({status}) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [value, setValue] = useState<string>(status)


    const activateStatusBar = () => {
        setEditMode(true)
    }

    const deActivateStatusBar = () => {
        setEditMode(false)
    }
    return (
        <>
            {!editMode
                ? <div>
                    <span onDoubleClick={activateStatusBar}>{value}</span>
                </div>
                : <div>
                    <input
                        value={value}
                        onBlur={deActivateStatusBar}
                        onChange={(e) => setValue( e.currentTarget.value)}
                        autoFocus={true}
                        type="text" placeholder='Enter your status'/>
                </div>
            }

        </>
    );
};

export default ProfileStatus;