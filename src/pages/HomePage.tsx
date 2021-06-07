import React, {useState} from "react";
import {MessageList} from "../components/MessageList";
import {UserInput} from "../components/UserInput";
import {Message} from "../entities/Message";

export const HomePage = (): JSX.Element => {

    const [messList, setMessList] = useState<Array<Message>>([]);

    enum users {
        SABRINA = "Sabrina",
        MATTEO = "Matteo"
    }

    const sendMessHandler = (mess : Message) => {
        //mess.id = messList.length + 1;
        setMessList(list => [...list, mess]);
    }

    const deleteMessHandler = (id : Date) => {
        const tempList = messList;
        const index = tempList.findIndex(x => x.id === id);
        if (index > -1) {
            tempList.splice(index, 1);
        }
        setMessList(list => [...tempList]);
    }

    return (
        <div style={{width: "75vw", margin: "auto"}}>
            <div>
                <h2>Messages</h2>
                <div style={{width: "25vw", margin: "auto"}}>
                    <MessageList messages = {messList} deleteHandler={deleteMessHandler}/>
                </div>
            </div>

            <hr />

            <div>
                <h2>Chat</h2>
                <UserInput user = {users.SABRINA} sendHandler = {sendMessHandler}/>
                <UserInput user = {users.MATTEO} sendHandler = {sendMessHandler}/>
            </div>
        </div>
    );
}