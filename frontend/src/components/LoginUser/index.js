import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FaUser } from 'react-icons/fa';

import LoginImage from '../../assets/login.png';
import gerarCorAleatoria from '../../utils/gerarCorAleatoria';

import { Login, InputUser, Image, Button } from './styles';

import * as UserActions from '../../store/modules/user/actions';
import { connectSocket } from '../../services/socket';

// eslint-disable-next-line react/prop-types
function LoginUser({ nomeUsuario }) {
    const [user, setUser] = useState('');
    const [cor, setCor] = useState('');

    useEffect(() => {
        setCor(gerarCorAleatoria());
    }, []);

    function handleLogin() {
        nomeUsuario(user, cor);
        connectSocket(user);
    }
    return (
        <>
            <Image src={LoginImage} />
            <Login>
                <InputUser>
                    <FaUser color="#222" size={20} />
                    <input
                        type="text"
                        placeholder="Nome de usuário..."
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                    />
                </InputUser>
                <Button to="/chat" onClick={handleLogin}>
                    Entrar
                </Button>
            </Login>
        </>
    );
}

const mapDispatchToCarts = (dispatch) => {
    return bindActionCreators(UserActions, dispatch);
};

export default connect(null, mapDispatchToCarts)(LoginUser);
