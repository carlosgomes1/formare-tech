/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
import React, { useState, useEffect, createRef } from 'react';
import { connect } from 'react-redux';
import { FaArrowRight, FaSignOutAlt, FaTrash } from 'react-icons/fa';

import {
    Container,
    ChatContainer,
    Title,
    ChatMensagens,
    EnviarMensagem,
    SignOut,
    OnlineMembers,
    Membros,
    OpContainer,
    Filter,
    Next,
    Title2,
    FilterContainer,
    ProximoDesafio,
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
    const [buscarUsuario, setBuscarUsuario] = useState('');
    const [boolBuscarUsuario, setBoolBuscarUsuario] = useState(false);
    const [reverse, setReverse] = useState(false);

    async function loadMensagens() {
        if (boolBuscarUsuario === true) {
            const response = await api.get('/filtro', {
                params: {
                    nome: buscarUsuario,
                },
            });
            setMensagensChat(response.data);
        } else {
            const response = await api.get('/mensagens');
            setMensagensChat(response.data);
        }
    }

    useEffect(() => {
        usersOnline((membro) => setMembrosOnline([...membro, membro]));
    }, [membrosOnline]);

    const chatRef = createRef();

    function loadMensagensSocket() {
        mensagensSocket((mensagemSocket) =>
            setMensagensChat([...mensagensChat, mensagemSocket])
        );
    }

    useEffect(() => {
        loadMensagensSocket();

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

    function handleFiltroUsuario(n) {
        if (n === 1 && boolBuscarUsuario === true) {
            setBoolBuscarUsuario(false);
            loadMensagens();
        }

        if (n === 2 && boolBuscarUsuario === false) {
            setBoolBuscarUsuario(true);
            loadMensagens();
        }
    }

    function handleAntigas() {
        if (reverse === false) {
            setMensagensChat([...mensagensChat].reverse());
        }
        setReverse(true);
    }

    function handleNovas() {
        if (reverse === true) {
            setMensagensChat([...mensagensChat].reverse());
        }
        setReverse(false);
    }

    async function handleDelete(_id) {
        await api.delete(`/mensagens/${_id}`);

        loadMensagens();
    }

    return (
        <Container>
            <ChatContainer>
                <Title>
                    <SignOut to="/" onClick={disconnect}>
                        <FaSignOutAlt size={28} color="#444" />
                    </SignOut>
                    <strong> CHAT CONSULTOR </strong>
                </Title>
                <ChatMensagens ref={chatRef}>
                    {mensagensChat.map((mensagem) => (
                        // eslint-disable-next-line no-underscore-dangle
                        <div key={mensagem._id}>
                            <FaTrash
                                color="red"
                                size={12}
                                onClick={() => handleDelete(mensagem._id)}
                            />
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
            <OpContainer>
                <OnlineMembers>
                    <Title2>
                        <strong> Online </strong>
                    </Title2>
                    <Membros>
                        {membrosOnline.map((membro) => (
                            <div key={membro.id}>
                                <strong> {membro.nome} </strong>
                            </div>
                        ))}
                    </Membros>
                </OnlineMembers>
                <Filter>
                    <Title2>
                        <strong> filtro </strong>
                    </Title2>
                    <FilterContainer>
                        <button
                            type="button"
                            onClick={() => handleFiltroUsuario(2)}
                        >
                            Todos
                        </button>
                        <div>
                            <input
                                placeholder="Usuário..."
                                type="text"
                                value={buscarUsuario}
                                onChange={(e) =>
                                    setBuscarUsuario(e.target.value)
                                }
                            />
                            <button
                                type="button"
                                onClick={() => handleFiltroUsuario(1)}
                            >
                                Buscar usuário
                            </button>
                        </div>
                        <div>
                            <button type="button" onClick={handleAntigas}>
                                Mais antigas
                            </button>
                            <button type="button" onClick={handleNovas}>
                                Mais novas
                            </button>
                        </div>
                    </FilterContainer>
                </Filter>
                <Next>
                    <Title2>
                        <strong> próximo desafio </strong>
                    </Title2>
                    <ProximoDesafio to="/desafio">
                        <FaSignOutAlt size={26} color="#444" />
                        <span> Ir para o próximo desafio </span>
                    </ProximoDesafio>
                </Next>
            </OpContainer>
        </Container>
    );
}

const mapStateToProps = (state) => ({
    nome: state.user.nome,
    cor: state.user.cor,
});

export default connect(mapStateToProps)(Chat);
