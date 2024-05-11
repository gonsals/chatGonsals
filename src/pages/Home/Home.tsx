import Chat from "../../components/Chat/Chat";
import Sidebar from "../../components/Sidebar/index";
import { HomeDiv } from "./Home.styles";

const Home = () => (
    <HomeDiv>
        <div className="container">
            <Sidebar />
            <Chat />
        </div>
    </HomeDiv>
);

export default Home;
