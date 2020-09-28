export const setUser = user => ({
    type: 'SET_USER',
    payload: user
});

export const setWallet = wallet => ({
    type: 'SET_WALLET',
    payload: wallet
});

export const addWalletAmount = amount => ({
    type: 'ADD_WALLET_AMOUNT',
    payload: amount
});