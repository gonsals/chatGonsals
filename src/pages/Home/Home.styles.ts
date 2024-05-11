import styled from "styled-components";
import { tablet } from "../Register/Register.styles";

export const HomeDiv = styled.div`
    display: flex;
    background-color: #a7bcff;
    align-items: center;
    height: 100vh;
    justify-content: center;

    .container {
        border: 1px solid white;
        border-radius: 10px;
        width: 65%;
        height: 80%;
        display: flex;
        overflow: hidden;
        ${tablet(`
            width: 90%;
            `)}
    }
`;
