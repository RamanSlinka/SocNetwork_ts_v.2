import React, { FC } from 'react';
import style from './post.module.scss'

type PostType = {
    message: string
    likesCount: string
}

const Post:FC<PostType> = ({message, likesCount}) => {
    return (
        <div>
            <img className={style.img}
                src="https://static.vecteezy.com/system/resources/previews/002/534/045/original/social-media-twitter-logo-blue-isolated-free-vector.jpg" alt="post"/>
         <p>   {message}</p>
           <span> like:{likesCount}</span>
        </div>
    );
};

export default Post;