import { FormContainer } from "../Register/Register.styles";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../app/services/firebase";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [err, setErr] = useState<boolean>();
    const navigate = useNavigate();

    const handleSubmit = async (
        e: React.BaseSyntheticEvent<Event, EventTarget & HTMLFormElement>
    ) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (error) {
            setErr(true);
        }
    };

    return (
        <FormContainer>
            <div className="formWrapper">
                <span className="logo">Marc Chat</span>
                <span className="title">Login</span>

                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Sign in</button>
                </form>
                {err && <span>Somthing went wrong</span>}
                <p>
                    Yo don't have an acount?{" "}
                    <Link to="/register">Register</Link>
                </p>
            </div>
        </FormContainer>
    );
};

export default Login;
