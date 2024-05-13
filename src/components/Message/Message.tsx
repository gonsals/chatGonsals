import { MessageContainer } from "./Message.styles";
import { useContext, useEffect, useRef } from "react";
import { AuthContext, AuthContextType } from "../../context/AuthContext";
import { ChatContext, ChatContextType } from "../../context/ChatContext";
import { MessageType } from "../../common/MessageType";

const Message = ({ message }: { message: MessageType }) => {
    const { currentUser }: AuthContextType = useContext(AuthContext);
    const { data }: ChatContextType = useContext(ChatContext);

    const isOwner = message.senderId === currentUser?.uid ? true : false;

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    }, [message]);

    return (
        <MessageContainer $isOwner={isOwner} ref={ref}>
            <div className="messageInfo">
                <img
                    src={
                        isOwner
                            ? currentUser?.photoURL || ""
                            : data.user?.photoURL || ""
                    }
                    alt="userImg"
                />
                <span>just now</span>
            </div>
            <div className="messageContent">
                {message.text && <p>{message.text}</p>}
                {message.img && <img src={message.img} alt="image" />}
            </div>
        </MessageContainer>
    );
};

export default Message;
