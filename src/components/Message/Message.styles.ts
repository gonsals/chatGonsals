import styled from "styled-components";

export const MessageContainer = styled.div<{ $isOwner?: boolean }>`
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    flex-direction: ${({ $isOwner }) => $isOwner && "row-reverse"};

    .messageInfo {
        display: flex;
        flex-direction: column;
        color: gray;
        font-weight: 300;
        img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            object-fit: cover;
        }
    }
    .messageContent {
        max-width: 80%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: ${({ $isOwner }) => $isOwner && "flex-end"};

        p {
            background-color: ${({ $isOwner }) =>
                $isOwner ? "#8da4f1" : "white"};
            padding: 10px 20px;
            border-radius: ${({ $isOwner }) =>
                $isOwner ? "10px 0px 10px 10px" : "0px 10px 10px 10px"};
            color: ${({ $isOwner }) => ($isOwner ? "white" : "black")};
            max-width: max-content;
        }

        img {
            width: 50%;
        }
    }
`;
