export function nomeUsuario(nome, cor = '#111') {
    return {
        type: '@user',
        nome,
        cor,
    };
}
