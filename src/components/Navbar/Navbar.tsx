import { NavBarContainer } from "./Navbar.styles";
//import { Test } from './Navbar.styles';

const Navbar = () => (
    <NavBarContainer>
        <span className="logo">Marc Chat</span>
        <div className="user">
            <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-olly-774909.jpg&fm=jpg"
                alt="userImg"
            />
            <span>Jhon</span>
            <button>logout</button>
        </div>
    </NavBarContainer>
);

export default Navbar;
