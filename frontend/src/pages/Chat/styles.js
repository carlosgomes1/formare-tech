import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
    height: 100%;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 40px;

    margin: auto;
`;

export const ChatContainer = styled.div`
    background: #fff;
    height: 80vh;
    border-radius: 6px;
    word-wrap: break-word;
    flex: 4;
    margin: 0 5vh;

    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 10%;

    color: #444;

    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);

    border-top-left-radius: 6px;
    border-top-right-radius: 6px;

    text-align: center;

    strong {
        flex: 1;
        font-style: italic;
        font-size: 24px;
    }
`;

export const SignOut = styled(Link)`
    margin: 0 1vw;

    svg {
        transform: rotate(180deg);
    }
`;

export const ChatMensagens = styled.div`
    height: 82%;
    padding: 10px;
    overflow: auto;
    position: relative;
    bottom: 0;
`;

export const EnviarMensagem = styled.div`
    height: 8%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-top: 1px solid #ddd;

    input {
        border: 0;
        height: 100%;
        flex: 1;
        font-size: 18px;
        padding: 0 20px;
    }

    svg {
        margin: 20px;

        &:hover {
            cursor: pointer;
        }
    }
`;

export const OnlineMembers = styled.div`
    flex: 2;
    height: 80vh;

    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

    display: flex;
    flex-direction: column;
`;

export const Membros = styled.div`
    flex: 1;
    padding: 10px;
    display: flex;
    align-items: baseline;
    flex-direction: column;

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        word-wrap: break-word;

        svg {
            color: green;
            background-color: green;
            border-radius: 50%;
        }

        strong {
            margin-left: 4px;
            flex: 1;
            font-size: 18px;
        }
    }
`;
