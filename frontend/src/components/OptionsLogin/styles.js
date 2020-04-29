import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LoginBox = styled.div`
    height: 60vh;
    width: 60vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border-radius: 8px;

    padding: 10px;

    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);

    svg {
        cursor: pointer;
    }
`;

export const Image = styled.img`
    height: 50%;
    width: 50%;
    align-self: center;
    margin-top: 20px;
`;

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin-bottom: 50px;

    button {
        width: 100%;
        height: 5vh;

        border: 0;
        border-radius: 6px;

        font-weight: bold;

        background: transparent;

        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
        color: #555;

        transition: 0.3s ease-in;

        &:hover {
            box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.8);
        }
    }

    button + button {
        margin-top: 10px;
    }
`;
