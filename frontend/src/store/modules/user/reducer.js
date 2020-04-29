const initialState = {
    nome: '',
    cor: '',
};

export default function user(state = initialState, action) {
    switch (action.type) {
        case '@user':
            return {
                ...state,
                nome: action.nome,
                cor: action.cor,
            };
        default:
            return state;
    }
}
