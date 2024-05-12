import { signOut } from "firebase/auth";
import { NavBarContainer } from "./Navbar.styles";
import { auth } from "../../app/services/firebase";
import { useContext } from "react";
import { AuthContext, AuthContextType } from "../../context/AuthContext";

const Navbar = () => {
    const { currentUser }: AuthContextType = useContext(AuthContext);

    const { displayName, photoURL } = currentUser || {};

    const handleSignOut = () => {
        signOut(auth).then(() => {});
    };

    return (
        <NavBarContainer>
            <span className="logo">Marc Chat</span>
            <div className="user">
                {photoURL && <img src={photoURL} alt="userImg" />}
                {displayName && <span>{displayName}</span>}
                <button onClick={handleSignOut}>logout</button>
            </div>
        </NavBarContainer>
    );
};

export default Navbar;
