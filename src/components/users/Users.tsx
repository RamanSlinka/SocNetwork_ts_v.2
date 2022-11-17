import React from 'react';

const Users = () => {


    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <img src="https://www.011global.com/Account/Slices/user-anonymous.png" alt="user photo"
                style={{width:'80px', margin: '10px'}}/>
                <div>
                    <p>User description </p>
                    <p>userName</p>
                    <span>userStatus</span>
                </div>
            </div>
            <div>
                <button>Unfollow</button>
            </div>
        </div>
    );
};

export default Users;