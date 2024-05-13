import { useState, useContext, ChangeEvent } from "react";
import { InputContainer } from "./Input.styles";
import Img from "../../img/img.png";
import Attach from "../../img/attach.png";
import { AuthContext, AuthContextType } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import {
    Timestamp,
    arrayUnion,
    doc,
    serverTimestamp,
    updateDoc,
} from "firebase/firestore";
import { v4 as uuid } from "uuid";
import { db, storage } from "../../app/services/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import toast from "react-hot-toast";

interface Message {
    id: string;
    text: string;
    senderId: string | undefined;
    date: Timestamp;
    img?: string;
}

const Input = () => {
    const [text, setText] = useState<string>("");
    const [img, setImg] = useState<File | undefined>();

    console.log(img);
    const { currentUser }: AuthContextType = useContext(AuthContext);
    const { data } = useContext(ChatContext);

    const handleSend = async () => {
        if (img) {
            const storageRef = ref(storage, uuid());

            const uploadTask = uploadBytesResumable(storageRef, img);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log(progress);
                },
                () => {
                    toast.error("Error uploading image");
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(
                        async (downloadURL) => {
                            const newMessage: Message = {
                                id: uuid(),
                                text,
                                senderId: currentUser?.uid,
                                date: Timestamp.now(),
                                img: downloadURL,
                            };
                            await updateDoc(doc(db, "chats", data.chatId), {
                                messages: arrayUnion(newMessage),
                            });
                        }
                    );
                }
            );
            setImg(undefined);
            setText("");
        } else {
            const newMessage: Message = {
                id: uuid(),
                text,
                senderId: currentUser?.uid,
                date: Timestamp.now(),
            };
            await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion(newMessage),
            });

            currentUser &&
                (await updateDoc(doc(db, "userChats", currentUser?.uid), {
                    [data.chatId + ".lastMessage"]: {
                        text,
                    },
                    [data.chatId + ".date"]: serverTimestamp(),
                }));
            await updateDoc(doc(db, "userChats", data.user.uid), {
                [data.chatId + ".lastMessage"]: {
                    text,
                },
                [data.chatId + ".date"]: serverTimestamp(),
            });

            setImg(undefined);
            setText("");
        }
    };

    const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImg(e.target.files[0]);
        }
    };

    return (
        <InputContainer>
            <input
                type="text"
                placeholder="Type something..."
                value={text}
                onChange={handleTextChange}
            />
            <div className="send">
                <img src={Attach} alt="" />
                <input
                    type="file"
                    style={{ display: "none" }}
                    id="file"
                    onChange={handleImageChange}
                />
                <label htmlFor="file">
                    <img src={Img} alt="" />
                </label>
                <button onClick={handleSend}>Send</button>
            </div>
        </InputContainer>
    );
};

export default Input;
