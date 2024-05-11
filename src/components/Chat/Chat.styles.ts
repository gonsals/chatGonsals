import styled from "styled-components";

export const ChatDiv = styled.div`
    flex: 2;

    .chatInfo {
        height: 50px;
        background-color: #5d5b8d;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        color: lightgray;
    }

    .chatIcons {
        display: flex;
        gap: 10px;

        img {
            height: 24px;
            width: 24px;
        }
    }
`;
