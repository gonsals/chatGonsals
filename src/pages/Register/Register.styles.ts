import styled, { css } from "styled-components";

export const mobile = (content: string) => css`
    @media screen and (max-width: 480px) {
        ${content};
    }
`;

export const tablet = (content: string) => css`
    @media screen and (max-width: 768px) {
        ${content};
    }
`;

export const laptop = (content: string) => css`
    @media screen and (max-width: 1200px) {
        ${content};
    }
`;

export const FormContainer = styled.div`
    background-color: #a7bcff;
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;

    .formWrapper {
        background-color: #fff;
        padding: 20px 60px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        .logo {
            color: #5d5b8d;
            font-weight: bold;
            font-size: 24px;
        }

        .title {
            color: #5d5b8d;
            font-size: 12px;
        }

        form {
            display: flex;
            flex-direction: column;
            gap: 15px;

            input {
                padding: 15px;
                border: none;
                width: 250px;
                border-bottom: 1px solid #a7bcff;
                &::placeholder {
                    color: rgb(175, 175, 175);
                }
            }
            button {
                color: white;
                background-color: #7b96ec;
                padding: 10px;
                font-weight: bold;
                border: none;
                cursor: pointer;
            }

            label {
                display: flex;
                align-items: center;
                gap: 10px;
                color: #8da4f1;
                font-size: 12px;
                cursor: pointer;

                img {
                    width: 32px;
                }
            }

            p {
                color: #5d5b8d;
                font-size: 12px;
                margin-top: 10px;
            }
        }
    }
`;
