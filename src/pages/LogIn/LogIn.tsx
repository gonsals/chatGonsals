import { FormContainer } from "../Register/Register.styles";

const Login = () => (
    <FormContainer>
        <div className="formWrapper">
            <span className="logo">Marc Chat</span>
            <span className="title">Login</span>

            <form action="">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <button>Sign in</button>
            </form>
            <p>
                Yo don't have an acount? <span>Register</span>
            </p>
        </div>
    </FormContainer>
);

export default Login;
