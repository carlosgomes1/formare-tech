/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';

import { Container, Grupo, Button, Main, LinkVoltar } from './styles';

import api from '../../services/api';

export default function Desafio() {
    const [participantes, setParticipantes] = useState([]);
    const [grupo1, setGrupo1] = useState([]);
    const [grupo2, setGrupo2] = useState([]);
    const [grupo3, setGrupo3] = useState([]);
    const [grupo4, setGrupo4] = useState([]);

    function separarEmGrupo() {
        let contador = 1;

        const um = [
            participantes.map((participante) => {
                if (contador === 1) {
                    contador++;
                    return participante.nome;
                }

                contador++;

                if (contador === 5) {
                    contador = 1;
                }
            }),
        ];
        contador = 1;

        const dois = [
            participantes.map((participante) => {
                if (contador === 2) {
                    contador++;
                    return participante.nome;
                }

                contador++;

                if (contador === 5) {
                    contador = 1;
                }
            }),
        ];
        contador = 1;

        const tres = [
            participantes.map((participante) => {
                if (contador === 3) {
                    contador++;
                    return participante.nome;
                }

                contador++;

                if (contador === 5) {
                    contador = 1;
                }
            }),
        ];
        contador = 1;

        const quatro = [
            participantes.map((participante) => {
                if (contador === 4) {
                    contador = 1;
                    return participante.nome;
                }

                contador++;
            }),
        ];

        setGrupo1(um);
        setGrupo2(dois);
        setGrupo3(tres);
        setGrupo4(quatro);
    }

    async function pegarNomes() {
        const response = await api.get('/participantes');

        setParticipantes(response.data);
    }

    useEffect(() => {
        pegarNomes();
    }, []);

    return (
        <Main>
            <div>
                <LinkVoltar to="/chatConsultor">
                    <FaSignOutAlt size={40} color="#333" />
                </LinkVoltar>

                <Button type="button" onClick={separarEmGrupo}>
                    Mostrar Grupos
                </Button>
            </div>

            <Container>
                <Grupo>
                    {grupo1.map((participante) =>
                        participante.map((p) => <p>{p}</p>)
                    )}
                </Grupo>
                <Grupo>
                    {grupo2.map((participante) =>
                        participante.map((p) => <p>{p}</p>)
                    )}
                </Grupo>
                <Grupo>
                    {grupo3.map((participante) =>
                        participante.map((p) => <p>{p}</p>)
                    )}
                </Grupo>
                <Grupo>
                    {grupo4.map((participante) =>
                        participante.map((p) => <p>{p}</p>)
                    )}
                </Grupo>
            </Container>
        </Main>
    );
}
