import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Main = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;

    div {
        width: 80vw;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4);

        svg {
            margin: 0 20px;
            cursor: pointer;
            transform: rotate(180deg);
        }
    }
`;

export const Container = styled.main`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;

    height: 80vh;
    width: 80vw;

    margin: auto;
`;

export const Grupo = styled.span`
    width: 100%;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);

    p {
        text-align: center;
        color: black;

        color: #222;
        font-style: italic;

        &:hover {
            opacity: 0.1;
        }
    }
`;

export const Button = styled.button`
    width: 40%;
    padding: 20px;
    margin: 10px;

    border: 0;
    color: #333;
    font-style: italic;
    background: transparent;
    font-size: 18px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);

    transition: 0.2s ease-in;

    &:hover {
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.9);
    }
`;

export const LinkVoltar = styled(Link)``;
