import React from 'react';
import Friend from "./Friend/Friend";
import s from './Friends.module.css'

const Friends = (props) => {

    let postsElements =
        props.state.sidebar.map( f => <Friend friend={f.friend}/>);

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div className={s.enter}>
                <div>
                    <textarea/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default Friends;