import React, {useState} from "react";
import {Message} from "../entities/Message";

interface MessageItemProps {
    key: number
    mess: Message
    deleteHandler: (id: Date) => void
}

export const MessageItem: React.VFC<MessageItemProps> = ({mess, deleteHandler}) => {
    const [hover, setHover] = useState(false);

    const formatDate = (date : Date) : string => {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        let strTime = hours + ':' + (minutes < 10 ? '0'+minutes.toString() : minutes) + ' ' + ampm;
        return (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
    }

    const onHover = () => {
        setHover(true);
    };

    const onLeave = () => {
        setHover(false);
    };

    const deleteItemHandler = () => {
        deleteHandler(mess.id);
    }

    return (
        <li key={mess.id.toString()} style={{padding: 5}}
            onMouseEnter={onHover} onMouseLeave={onLeave}>

            <span style={{fontWeight: "bold"}}> {formatDate(mess.dateTime)}, {mess.user}: </span>
            <span>{mess.text}</span>
            {hover &&
                <span style={{padding: 5}}>
                    <button onClick={deleteItemHandler}>Delete</button>
                </span>
            }
        </li>
    )
}