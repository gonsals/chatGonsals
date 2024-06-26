import styled from "styled-components";

export const InputContainer = styled.div`
    height: 70px;
    background-color: white;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .send {
        display: flex;
        align-items: center;
        gap: 10px;

        img {
            height: 24px;
            cursor: pointer;
        }

        button {
            border: none;
            padding: 10px 15px;
            color: white;
            background-color: #8da4f1;
        }
    }

    input {
        width: 100%;
        border: none;
        outline: none;
        color: #2f2d52;
        font-size: 18px;

        &::placeholder {
            color: lightgray;
        }
    }
`;
