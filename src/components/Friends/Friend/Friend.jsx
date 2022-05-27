import React from 'react';
import s from './Friend.module.css';

const Friend = (props) => {
    return (
        <div className={s.item}>
            <img src='https://cdn-icons-png.flaticon.com/512/147/147144.png'/>
            <div>
                <span>{props.friend} </span>
            </div>
        </div>
    )

}

export default Friend;