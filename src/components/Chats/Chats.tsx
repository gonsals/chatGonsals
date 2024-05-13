import { useEffect, useState, useContext } from "react";
import { Test } from "./Chats.styles";
import { onSnapshot, doc, DocumentData } from "firebase/firestore";
import { db } from "../../app/services/firebase";
import { AuthContext, AuthContextType } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { User } from "firebase/auth";

const Chats = () => {
    const { currentUser }: AuthContextType = useContext(AuthContext);
    const { dispatch } = useContext(ChatContext);

    const [chats, setChats] = useState<DocumentData | null>(null);

    useEffect(() => {
        if (currentUser && currentUser.uid) {
            const userChatRef = doc(db, "userChats", currentUser.uid);
            const unsub = onSnapshot(userChatRef, (doc) => {
                if (doc.exists()) {
                    setChats(doc.data() as DocumentData);
                } else {
                    setChats(null);
                }
            });
            return () => {
                unsub();
            };
        }
    }, [currentUser]);

    const handleSelect = (user: User) => {
        dispatch({ type: "CHANGE_USER", payload: user });
    };

    return (
        <Test>
            {chats &&
                Object.entries(chats)
                    ?.sort((a, b) => b[1].date - a[1].date)
                    .map((chat) => {
                        return (
                            <div
                                className="userChat"
                                key={chat[0]}
                                onClick={() => handleSelect(chat[1].userInfo)}
                            >
                                <img
                                    src={chat[1].userInfo.photoURL}
                                    alt="userImg"
                                />
                                <div className="userChatInfo">
                                    <span>{chat[1].userInfo.displayName}</span>
                                    <p>{chat[1].lastMessage?.text}</p>
                                </div>
                            </div>
                        );
                    })}
        </Test>
    );
};

export default Chats;
