import styled from "styled-components";
import { tablet, mobile } from "../../pages/Register/Register.styles";

export const NavBarContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #2f2d52;
    height: 50px;
    padding: 10px;
    justify-content: space-between;
    color: #ddddf7;
    ${mobile(`
        flex-direction:column;
        height: auto;
        `)}

    .logo {
        font-weight: bold;
        ${tablet(`
            display:none;
            `)}
    }

    .user {
        display: flex;
        gap: 10px;
        align-items: center;
        ${mobile(`
        flex-direction:column;
        `)}
    }

    img {
        background-color: #ddddf7;
        height: 24px;
        width: 24px;
        border-radius: 50%;
        object-fit: cover;
    }

    button {
        background-color: #5d5b8d;
        color: #ddddf7;
        font-size: 10px;
        border: none;
        cursor: pointer;
        padding: 2px 6px;
        ${tablet(`
            position:absolute;
            bottom:10px;
            `)}
    }
`;
