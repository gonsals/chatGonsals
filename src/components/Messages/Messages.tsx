import Message from "../Message/index";
import { MessagesContainer } from "./Messages.styles";

const Messages = () => (
    <MessagesContainer>
        <Message isOwner={true} />
        <Message isOwner={false} />
        <Message isOwner={true} />
    </MessagesContainer>
);

export default Messages;
