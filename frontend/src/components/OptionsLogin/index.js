import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

import LoginImage from '../../assets/login.png';
import LoginUser from '../LoginUser';
import LoginConsultor from '../LoginConsultor';

import { Container, LoginBox, Buttons, Image } from './styles';

export default function OptionsImage() {
    const [display, setDisplay] = useState(true);
    const [loginUser, setLoginUser] = useState(false);
    const [loginConsultor, setLoginConsultor] = useState(false);

    const [back, setBack] = useState(true);

    function handleBack(option) {
        setBack(!back);
        setDisplay(!display);

        if (option === 'user') {
            setLoginUser(!loginUser);
        } else {
            setLoginConsultor(!loginConsultor);
        }
    }

    function handleOption(option) {
        setDisplay(!display);
        setBack(true);

        if (option === 'user') {
            setLoginUser(!loginUser);
        } else {
            setLoginConsultor(!loginConsultor);
        }
    }

    return (
        <Container>
            <LoginBox style={{ display: display ? 'flex' : 'none' }}>
                <Image src={LoginImage} />
                <Buttons>
                    <button onClick={() => handleOption('user')} type="button">
                        Usuário
                    </button>
                    <button
                        onClick={() => handleOption('consultor')}
                        type="button"
                    >
                        Consultor
                    </button>
                </Buttons>
            </LoginBox>

            {loginUser ? (
                <LoginBox>
                    <FaArrowLeft
                        color="#222"
                        size={20}
                        onClick={() => handleBack('user')}
                    />
                    <LoginUser />
                </LoginBox>
            ) : null}

            {loginConsultor ? (
                <LoginBox>
                    <FaArrowLeft
                        color="#222"
                        size={20}
                        onClick={() => handleBack('consultor')}
                    />
                    <LoginConsultor />
                </LoginBox>
            ) : null}
        </Container>
    );
}
