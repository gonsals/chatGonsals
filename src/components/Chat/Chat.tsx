import { ChatDiv } from "./Chat.styles";
import Cam from "../../img/cam.png";
import Add from "../../img/add.png";
import More from "../../img/more.png";
import Messages from "../Messages/index";
import Input from "../Input/index";

const Chat = () => (
    <ChatDiv>
        <div className="chatInfo">
            <span>Jane</span>
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

export default Chat;
