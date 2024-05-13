import Message from "../Message/index";
import { MessagesContainer } from "./Messages.styles";
import { useContext, useEffect, useState } from "react";
import { ChatContext } from "../../context/ChatContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../app/services/firebase";
import { MessageType } from "../../common/MessageType";

const Messages = () => {
    const [messages, setMessages] = useState([]);
    const { data } = useContext(ChatContext);

    useEffect(() => {
        const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
            doc.exists() && setMessages(doc.data().messages);
        });
        return () => {
            unSub();
        };
    }, [data.chatId]);

    return (
        <MessagesContainer>
            {messages.map((message: MessageType) => (
                <Message key={message.id} message={message} />
            ))}
        </MessagesContainer>
    );
};

export default Messages;
