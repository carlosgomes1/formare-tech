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

    svg {
        cursor: pointer;

        transition: 0.15s ease-out;

        &:hover {
            opacity: 0.8;
            height: 16px;
        }
    }
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
    flex: 3;

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

        strong {
            margin-left: 4px;
            font-size: 18px;
        }
    }
`;

export const OpContainer = styled.div`
    flex: 2;
    height: 80vh;

    display: flex;
    flex-direction: column;
`;

export const Filter = styled.div`
    flex: 2;

    display: flex;
    flex-direction: column;

    margin: 10px 0;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;

export const Next = styled.div`
    flex: 1;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;

export const Title2 = styled.div`
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;

    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);

    svg {
        cursor: pointer;

        transition: 0.3s ease-in;

        &:hover {
            opacity: 0.7;
        }
    }

    strong {
        color: #444;
        font-style: italic;
    }
`;

export const FilterContainer = styled.div`
    flex: 1;
    padding: 6px 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    button {
        flex: 1;
        margin: 4px;
        border: 0;
        background: #fff;
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4);
        color: #222;

        transition: 0.3s ease-in;

        &:hover {
            box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.8);
        }
    }

    div {
        flex: 1;
        display: flex;

        input {
            margin: 4px;
            width: 60%;
            padding: 0 10px;
            font-size: 10px;

            border: 0;
            box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4);

            color: gray;
        }
    }
`;

export const ProximoDesafio = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 10px;

    text-decoration: none;

    transition: 0.2s ease-in;

    &:hover {
        opacity: 0.7;
    }

    span {
        font-size: 16px;
        color: #333;
    }
`;
