import styled from 'styled-components';

export const FormContainer = styled.div`
    background-color: #a7bcff;
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content:center;

    .formWrapper{

        background-color: #fff;
        padding: 20px 60px;
        border-radius:10px;
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:10px;

        .logo {
            color: #5d5b8d;
            font-weight: bold;
            font-size: 24px;
        }

        .title {
            color: #5d5b8d;
            font-size: 12px;
        }

        form{
            display: flex;
            flex-direction: column;
            gap: 15px;

            input {
                padding: 15px;
                border: none;
                width: 250px;
                border-bottom: 1px solid #a7bcff;
            }
        }
    }
`;
