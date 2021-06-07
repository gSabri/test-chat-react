import React, {useState} from "react";
import {Message} from "../entities/Message";

interface UserInputProps {
    user: string
    sendHandler: (mess : Message) => void;
}

export const UserInput: React.VFC<UserInputProps> = ({user, sendHandler}) => {

    const [text, setText] = useState("");

    const sendMessageHandler = () => {
        // input validation
        if (!text || text.length === 0) {
            alert("Invalid input");
        } else {
            sendHandler({id: new Date(), text: text, user: user, dateTime: new Date()});
            setText("");
        }
    }

    const handleKeyDown = (event : any) => {
        if (event.key === 'Enter') {
            sendMessageHandler();
        }
    }

    const changeHandler = (event : any) => {
        setText(event.target.value);
    }

    return (
        <div style={{ padding: 5 }}>
            <span style={{ marginRight: 5, fontWeight: "bold"}}>{user}: </span>

            <input type="text" value={text} onChange={changeHandler} onKeyDown={handleKeyDown}/>

            <button style={{ marginLeft: 5}} onClick={sendMessageHandler}> Send </button>
        </div>
    );
}