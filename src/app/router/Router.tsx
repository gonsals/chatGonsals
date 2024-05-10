import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "../../pages/Register";

const AppRouter = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Register />} />
            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    </Router>
);

export default AppRouter;
