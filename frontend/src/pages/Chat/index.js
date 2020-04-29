/* eslint-disable no-shadow */
import React, { useState, useEffect, createRef } from 'react';
import { connect } from 'react-redux';
import { FaArrowRight, FaSignOutAlt } from 'react-icons/fa';

import {
    Container,
    ChatContainer,
    Title,
    ChatMensagens,
    EnviarMensagem,
    SignOut,
    OnlineMembers,
    Membros,
} from './styles';

import datas from '../../utils/formatarData';

import api from '../../services/api';
import {
    disconnect,
    usersOnline,
    mensagensSocket,
} from '../../services/socket';

// eslint-disable-next-line react/prop-types
function Chat({ nome, cor }) {
    const [mensagensChat, setMensagensChat] = useState([]);
    const [mensagem, setMensagem] = useState('');
    const [membrosOnline, setMembrosOnline] = useState([]);

    async function loadMensagens() {
        const response = await api.get('/mensagens');

        setMensagensChat(response.data);
    }

    useEffect(() => {
        usersOnline((membro) => setMembrosOnline([...membro, membro]));
    }, [membrosOnline]);

    const chatRef = createRef();

    async function loadMensagensSocket() {
        await mensagensSocket((mensagemSocket) =>
            setMensagensChat([...mensagensChat, mensagemSocket])
        );
    }

    useEffect(() => {
        loadMensagensSocket();
        loadMensagens();

        chatRef.current.scrollTop = 50000;
    }, [mensagensChat]);

    async function loadUsers() {
        const response = await api.get('/users');

        setMembrosOnline(response.data);
    }

    useEffect(() => {
        loadMensagens();
        loadUsers();
    }, []);

    // eslint-disable-next-line no-shadow
    function handleEnviarMensagem(mensagem) {
        api.post('/mensagens', {
            nome,
            mensagem,
            cor,
        });

        setMensagem('');
    }

    return (
        <Container>
            <ChatContainer>
                <Title>
                    <SignOut to="/" onClick={disconnect}>
                        <FaSignOutAlt size={28} color="#444" />
                    </SignOut>
                    <strong> CHAT ONLINE </strong>
                </Title>
                <ChatMensagens ref={chatRef}>
                    {mensagensChat.map((mensagem) => (
                        // eslint-disable-next-line no-underscore-dangle
                        <div key={mensagem._id}>
                            <span
                                style={{
                                    display: 'inline',
                                    color: mensagem.cor,
                                }}
                            >
                                {' '}
                                {datas(mensagem.createdAt).ddmmaaaa} -{' '}
                            </span>
                            <span
                                style={{
                                    display: 'inline',
                                    color: mensagem.cor,
                                }}
                            >
                                {' '}
                                {mensagem.nome} -{' '}
                            </span>
                            <span
                                style={{
                                    display: 'inline',
                                    color: mensagem.cor,
                                }}
                            >
                                {' '}
                                {datas(mensagem.createdAt).hhmm} =&gt;{' '}
                            </span>
                            <span> {mensagem.mensagem} </span>
                        </div>
                    ))}
                </ChatMensagens>
                <EnviarMensagem>
                    <input
                        type="text"
                        placeholder="Digite sua mensagem..."
                        value={mensagem}
                        onChange={(e) => setMensagem(e.target.value)}
                    />
                    <FaArrowRight
                        color="#444"
                        size={20}
                        onClick={() => handleEnviarMensagem(mensagem)}
                    />
                </EnviarMensagem>
            </ChatContainer>
            <OnlineMembers>
                <Title>
                    <strong> Online </strong>
                </Title>
                <Membros>
                    {membrosOnline.map((membros) => (
                        <div key={membros.id}>
                            <strong> {membros.nome} </strong>
                        </div>
                    ))}
                </Membros>
            </OnlineMembers>
        </Container>
    );
}

const mapStateToProps = (state) => ({
    nome: state.user.nome,
    cor: state.user.cor,
});

export default connect(mapStateToProps)(Chat);
