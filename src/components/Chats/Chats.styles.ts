import styled from "styled-components";
import { mobile } from "../../pages/Register/Register.styles";

export const Test = styled.div`
    .userChat {
        padding: 10px;
        display: flex;
        align-items: center;
        gap: 10px;
        color: white;
        cursor: pointer;
        ${mobile(`
            flex-direction:column;
            gap:0;
            `)}

        &:hover {
            background-color: #2f2d52;
        }

        img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
            ${mobile(`
                width: 36px;
                height: 36px;
            `)}
        }

        .userChatInfo {
            ${mobile(`
            display: flex;
            flex-direction: column;
            align-items: center;

            `)}
            span {
                font-size: 18px;
                font-weight: 500;
                ${mobile(`
                font-size: 14px;
            `)}
            }
            p {
                font-size: 14px;
                ${mobile(`
                font-size: 10px;
            `)}
            }
        }
    }
`;
