/* eslint-disable radix */
export default function data(datas) {
    const dataOnDate = new Date(datas);

    const dia = (dataOnDate.getDate() < 10 ? '0' : '') + dataOnDate.getDate();
    const mes =
        (dataOnDate.getMonth() < 10 ? '0' : '') + (dataOnDate.getMonth() + 1);
    const ano = dataOnDate.getFullYear();

    const horas =
        (dataOnDate.getHours() < 10 ? '0' : '') + dataOnDate.getHours();
    const minuto =
        (dataOnDate.getMinutes() < 10 ? '0' : '') + dataOnDate.getMinutes();

    const ddmmaaaa = `${dia}/${mes}/${ano}`;
    const hhmm = `${horas}:${minuto}`;
    const forSearch = `${parseInt(dia) + 1}/${mes}/${ano}`;

    return { ddmmaaaa, hhmm, forSearch };
}
