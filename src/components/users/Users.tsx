import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setFollowedAC, setUnfollowedAC, setUsersAC, User} from "../../ redux/usersReducer";
import {AppStateType} from "../../ redux/redux-store";

const Users = () => {

    const users = useSelector<AppStateType, User[] | null>(state => state.usersPage.users)
    console.log(users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setUsersAC(users))
    }, [])

const noImage = 'https://st2.depositphotos.com/1009634/7235/v/450/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg'

    return (
        <>
            {users && users.map((u: User) => (
                <div key={u.id}>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <img src={u.photos.small ? u.photos.small : noImage} alt="user photo"
                             style={{width: '80px', margin: '10px'}}/>
                        <div>
                            <p>User description </p>
                            <p>{u.name}</p>
                            <span>{u.status}</span>
                        </div>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => dispatch(setUnfollowedAC(u.id))}>Unfollow</button>
                            : <button onClick={() => dispatch(setFollowedAC(u.id))}>Follow</button>
                        }

                    </div>
                </div>

            ))}
        </>
    );
};

export default Users;