import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

let newMsgElement = React.createRef();
let addMsg = () => {
    let text = newMsgElement.current.value;
    alert("Ur new MSG is:  " + text)
}
const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.writeMsg}>
                    <div>
                        <textarea className={s.text} ref={newMsgElement}/>
                    </div>
                    <div>
                        <button className={s.btn} onClick={addMsg}>Send Msg</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;