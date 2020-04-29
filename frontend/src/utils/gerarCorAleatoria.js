export default function gerarCor() {
    const hexadecimais = '0123456789ABCDEF';
    let cor = '#';

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 6; i++) {
        // eslint-disable-next-line no-const-assign
        cor += hexadecimais[Math.floor(Math.random() * 16)];
    }
    return cor;
}
