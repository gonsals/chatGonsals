import { ChatDiv } from "./Chat.styles";
import Cam from "../../img/cam.png";
import Add from "../../img/add.png";
import More from "../../img/more.png";
import Messages from "../Messages/index";
import Input from "../Input/index";
import { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";

const Chat = () => {
    const { user } = useContext(ChatContext);

console.log(user);

    return (
        <ChatDiv>
            <div className="chatInfo">
                <span>{user.displayName}</span>
                <div className="chatIcons">
                    <img src={Cam} alt="" />
                    <img src={Add} alt="" />
                    <img src={More} alt="" />
                </div>
            </div>
            <Messages />
            <Input />
        </ChatDiv>
    );
};

export default Chat;
