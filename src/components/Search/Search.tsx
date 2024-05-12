import { ChangeEvent, KeyboardEvent, useState, useContext } from "react";
import { SearchContainer } from "./Search.styles";
import {
    collection,
    doc,
    getDoc,
    setDoc,
    query,
    where,
    getDocs,
    DocumentData,
    updateDoc,
    serverTimestamp,
} from "firebase/firestore";
import { db } from "../../app/services/firebase";
import { toast } from "react-hot-toast";
import { AuthContext, AuthContextType } from "../../context/AuthContext";

const Search = () => {
    const [userName, setUserName] = useState("");
    const [user, setUser] = useState<DocumentData | null>(null);
    const { currentUser }: AuthContextType = useContext(AuthContext);

    const handleChangeUserName = (event: ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    };

    const handleSelect = async () => {
        if (user && currentUser) {
            const combinedId =
                currentUser.uid > user.uid
                    ? currentUser.uid + user.uid
                    : user.uid + currentUser.uid;
            try {
                const chatsRef = doc(db, "chats", combinedId);
                const userChatSnap = await getDoc(chatsRef);

                if (!userChatSnap.exists()) {
                    //create a chat in chats
                    await setDoc(chatsRef, {
                        messages: [],
                    });
                    //create user chats
                    await updateDoc(doc(db, "userChats", currentUser.uid), {
                        [combinedId + ".userInfo"]: {
                            uid: user.uid,
                            displayName: user.displayName,
                            photoURL: user.photoURL,
                        },
                        [combinedId + ".date"]: serverTimestamp(),
                    });
                    await updateDoc(doc(db, "userChats", user.uid), {
                        [combinedId + ".userInfo"]: {
                            uid: currentUser.uid,
                            displayName: currentUser.displayName,
                            photoURL: currentUser.photoURL,
                        },
                        [combinedId + ".date"]: serverTimestamp(),
                    });
                }
            } catch (error) {
                if (error instanceof Error) {
                    toast.error(error.message);
                } else {
                    toast.error("An unexpected error occurred");
                }
            }
            setUser(null);
            setUserName("");
        }
    };

    const handleSearch = async () => {
        if (!userName.trim()) {
            return;
        }
        try {
            const q = query(
                collection(db, "users"),
                where("displayName", "==", userName)
            );

            const querySnapshot = await getDocs(q);
            if (querySnapshot.empty) {
                throw new Error("User not found!");
            }
            setUser(querySnapshot.docs[0].data());
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message);
            } else {
                toast.error("An unexpected error occurred");
            }
        }
    };

    const handleKey = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.code === "Enter") {
            event.preventDefault();
            handleSearch();
        }
    };

    return (
        <SearchContainer>
            <div className="searchForm">
                <input
                    type="text"
                    placeholder="Find a user"
                    value={userName}
                    onChange={handleChangeUserName}
                    onKeyDown={handleKey}
                />
            </div>
            {user && (
                <div className="userChat" onClick={handleSelect}>
                    <img src={user.photoURL} alt="userImg" />
                    <div className="userChatInfo">
                        <span>{user.displayName}</span>
                    </div>
                </div>
            )}
        </SearchContainer>
    );
};

export default Search;
