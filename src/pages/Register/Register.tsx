import { FormContainer } from "./Register.styles";
import addAvatar from "../../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../../app/services/firebase";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
    const [err, setErr] = useState<boolean>();
    const navigate = useNavigate();

    const handleSubmit = async (
        e: React.BaseSyntheticEvent<Event, EventTarget & HTMLFormElement>
    ) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try {
            const res = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            const storageRef = ref(storage, displayName);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log(progress);
                },
                () => {
                    setErr(true);
                    toast.error("Error uploading image");
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(
                        async (downloadURL) => {
                            await updateProfile(res.user, {
                                displayName,
                                photoURL: downloadURL,
                            });
                            await setDoc(doc(db, "users", res.user.uid), {
                                uid: res.user.uid,
                                displayName,
                                email,
                                photoURL: downloadURL,
                            });

                            await setDoc(
                                doc(db, "userChats", res.user.uid),
                                {}
                            );

                            navigate("/");
                            toast.success("Image uploaded successfully");
                        }
                    );
                }
            );
        } catch (error) {
            setErr(true);
        }
    };

    return (
        <FormContainer>
            <div className="formWrapper">
                <span className="logo">Marc Chat</span>
                <span className="title">Register</span>

                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input style={{ display: "none" }} type="file" id="file" />
                    <label htmlFor="file">
                        <img src={addAvatar} alt="addImg" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign up</button>
                </form>
                {err && <span>Somthing went wrong</span>}
                <p>
                    Yo do have an acount? <Link to="/login">Login</Link>
                </p>
            </div>
        </FormContainer>
    );
};

export default Register;
