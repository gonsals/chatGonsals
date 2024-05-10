import { FormContainer } from './Register.styles';

const Register = () => (
  <FormContainer>
    <div className="formWrapper">
      <span className='logo'>Marc Chat</span>
      <span className='title'>Register</span>

      <form action="">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="file" />
        <button>Sign In</button>
      </form>
      <p>Yo do have an acount? <span>Login</span></p>
    </div>
  </FormContainer>
);


export default Register;
