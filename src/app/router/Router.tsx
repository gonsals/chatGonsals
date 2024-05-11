import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "../../pages/Register";
import Login from "../../pages/LogIn/LogIn";
import Home from "../../pages/Home";

const AppRouter = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    </Router>
);

export default AppRouter;
