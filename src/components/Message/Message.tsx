import { MessageContainer } from "./Message.styles";

const Message = ({ isOwner }: { isOwner: boolean }) => (
    <MessageContainer $isOwner={isOwner}>
        <div className="messageInfo">
            <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-olly-774909.jpg&fm=jpg"
                alt="userImg"
            />
            <span>just now</span>
        </div>
        <div className="messageContent">
            <p>hellow</p>
            <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-olly-774909.jpg&fm=jpg"
                alt=""
            />
        </div>
    </MessageContainer>
);

export default Message;
