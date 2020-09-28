const initialState = {wallet: null};

export const walletReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_WALLET':
            return {
                ...state,
                wallet: action.payload
            };
        case 'ADD_WALLET_AMOUNT':
            return {
                ...state,
                wallet: {
                    ...state.wallet,
                    amount: parseFloat(state.wallet.amount) + parseFloat(action.payload)
                }
            };
        default:
            return state;
    }
};