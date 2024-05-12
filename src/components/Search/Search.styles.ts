import styled from "styled-components";
import { mobile } from "../../pages/Register/Register.styles";

export const SearchContainer = styled.div`
    border-bottom: 1px solid gray;

    .searchForm {
        input {
            background-color: transparent;
            border: none;
            color: white;
            outline: none;
            padding: 10px;
            ${mobile(`
        display:none;
        `)}

            &::placeholder {
                color: lightgray;
            }
        }

        button{
            
        }
    }

    .userChat {
        padding: 10px;
        display: flex;
        align-items: center;
        gap: 10px;
        color: white;
        cursor: pointer;
        ${mobile(`
        flex-direction:column;
        gap:0px
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
            span {
                font-size: 18px;
                font-weight: 500;
                ${mobile(`
                font-size: 14px;
            `)}
            }
        }
    }
`;
