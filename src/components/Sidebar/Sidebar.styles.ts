import styled from "styled-components";
import { mobile } from "../../pages/Register/Register.styles";

export const SidebarDiv = styled.div`
    flex: 1;
    background-color: #3e3c61;
    position: relative;

    ${mobile(`
        width:60px;
        flex:none;
        `)}
`;
