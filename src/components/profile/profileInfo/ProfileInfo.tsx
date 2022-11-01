import React from 'react';
import style from './profileInfo.module.scss'
const ProfileInfo = () => {
    return (
        <div className={style.wrapper}>
            <div>   <img src="https://cdn.dribbble.com/users/2314106/screenshots/6849187/own_vector_portrait_illustration_4x.png?compress=1&resize=400x300&vertical=top" alt="avatar"
                         className={style.avatar}
            />
            </div>
            <div>
                description:
            </div>

        </div>
    );
};

export default ProfileInfo;