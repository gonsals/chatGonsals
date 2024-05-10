import Chat from "../../components/Chat/Chat";
import Sidebar from "../../components/Sidebar/index";

const Home = () => (
  <div className="home">
    <div className="container">
      <Sidebar />
      <Chat />
    </div>
  </div>
);


export default Home;
