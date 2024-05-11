import Router from "./app/router/Router";
import "./app.css";
import { Toaster } from "react-hot-toast";

const App = () => {
    return (
        <>
            <Toaster />
            <Router />
        </>
    );
};

export default App;
