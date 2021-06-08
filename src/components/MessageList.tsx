import React, {useMemo} from "react";
import {Message} from "../entities/Message";
import {MessageItem} from "./MessageItem";

interface MessageListProps {
    messages: Array<Message>
    deleteHandler: (id : Date) => void;
}

export const MessageList: React.VFC<MessageListProps> = ({messages, deleteHandler}) => {

    const messList = useMemo(() => {
        return (
            messages &&
            messages.map((mess : Message, index) => <MessageItem key={index} mess={mess} deleteHandler={deleteHandler}/>)
        );
    }, [messages, deleteHandler]);

    return (
        <div>
            <ul style={{ listStyleType: "none", listStyle: "none", paddingLeft: 0}}>
                {messList}
            </ul>
        </div>
    );
};