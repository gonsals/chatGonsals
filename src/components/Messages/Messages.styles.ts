import styled from "styled-components";

export const MessagesContainer = styled.div`
    background-color: #ddddf7;
    padding: 10px;
    height: calc(100% - 120px);
    overflow-y: auto;

    /* Estilos de scrollbar para navegadores webkit */
    &::-webkit-scrollbar {
        width: 7px;
    }

    &::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 20px;
    }

    &::-webkit-scrollbar-thumb:hover {
        border-radius: 20px;
        background: #555;
    }
`;
