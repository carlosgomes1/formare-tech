import styled from 'styled-components';

export const Login = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border-radius: 8px;

    padding: 0 40px;

    svg {
        cursor: pointer;
    }
`;

export const Image = styled.img`
    height: 40%;
    width: 40%;
    align-self: center;
`;

export const InputUser = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid #ccc;
    border-radius: 6px;

    height: 7vh;

    padding: 10px;
    margin-bottom: 10px;

    input {
        flex: 1;
        border: 0;
        height: 20px;
        background: transparent;
        margin-left: 10px;
        font-size: 16px;
    }
`;

export const Button = styled.button`
    width: 100%;
    border: 0;
    height: 6vh;
    border-radius: 6px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    padding: 1.5vh;

    background: transparent;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.6);
    color: #555;

    transition: 0.3s ease-in;

    &:hover {
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.8);
    }
`;
