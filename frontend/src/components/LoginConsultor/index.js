/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FaLock, FaUser } from 'react-icons/fa';

import LoginImage from '../../assets/login.png';

import { Login, InputUser, Image, Button } from './styles';

import * as UserActions from '../../store/modules/user/actions';
import api from '../../services/api';
import { connectSocket } from '../../services/socket';

function LoginConsultor({ nomeUsuario }) {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const history = useHistory();

    async function handleSubmit() {
        try {
            await api.post('/login', {
                nome: usuario,
                senha,
            });

            history.push('/chatConsultor');
            nomeUsuario(usuario);
            connectSocket(usuario);
        } catch (error) {
            alert(error);
        }

        setSenha('');
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
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                    />
                </InputUser>
                <InputUser>
                    <FaLock color="#222" size={20} />
                    <input
                        type="password"
                        placeholder="Senha..."
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </InputUser>
                <Button
                    style={{ cursor: 'pointer' }}
                    type="button"
                    onClick={handleSubmit}
                >
                    Entrar
                </Button>
            </Login>
        </>
    );
}

const mapDispatchToCarts = (dispatch) => {
    return bindActionCreators(UserActions, dispatch);
};

export default connect(null, mapDispatchToCarts)(LoginConsultor);
