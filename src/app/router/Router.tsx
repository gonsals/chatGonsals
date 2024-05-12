import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import Register from "../../pages/Register";
import Login from "../../pages/LogIn/LogIn";
import Home from "../../pages/Home";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const AppRouter = () => {
    const { currentUser } = useContext(AuthContext);

    console.log(currentUser);

    const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
        if (!currentUser) {
            return <Navigate to="/login" />;
        }
        return children;
    };

    return (
        <Router>
            <Routes>
                <Route
                    index
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    }
                />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<h1>404</h1>} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
