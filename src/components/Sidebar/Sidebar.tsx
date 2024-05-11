import Chats from "../Chats/index";
import Navbar from "../Navbar/index";
import Search from "../Search/index";
import { SidebarDiv } from "./Sidebar.styles";

const Sidebar = () => (
    <SidebarDiv>
        <Navbar />
        <Search />
        <Chats />
    </SidebarDiv>
);

export default Sidebar;
