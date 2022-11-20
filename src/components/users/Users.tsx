import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    setCurrentPageAC,
    setFollowedAC,
    setTotalUsersCountAC,
    setUnfollowedAC,
    setUsersAC,
    User
} from "../../ redux/usersReducer";
import {AppStateType} from "../../ redux/redux-store";
import styles from './users.module.scss'
import axios from "axios";

const noImage = 'https://st2.depositphotos.com/1009634/7235/v/450/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg'


const Users = () => {

    const users = useSelector<AppStateType, User[] | null>(state => state.usersPage.users)
    const totalUsersCount = useSelector<AppStateType, number>(state => state.usersPage.totalUsersCount)
    const currentPage = useSelector<AppStateType, number>(state => state.usersPage.currentPage)
    const pageSize = useSelector<AppStateType, number>(state => state.usersPage.pageSize)
    console.log(users)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then((res) => {
                const usersData = res.data.items;
                dispatch(setUsersAC(usersData))
                dispatch(setTotalUsersCountAC(res.data.totalCount))
            })


    }, [currentPage])


    const changeActivePage = (selectedPage: number) => {
      dispatch(setCurrentPageAC(selectedPage))
    }

    const pagesCount = Math.ceil(totalUsersCount / pageSize)
    const pages = []
    for(let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }

    return (
        <>
            <div>
                {pages.map((p) => {
                    return <span key={p}
                    className={ styles.selectedPage }
                                 onClick={() => changeActivePage(p)}
                    >{p}</span>
                })}
            </div>

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