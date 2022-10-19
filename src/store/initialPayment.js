const defaultState = {
    payment: 429000,
    percent: 13
}

const initialPaymentReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'CHANGE_PAYMENT':
            return {...state, payment: action.payload}
        case 'CHANGE_PERCENT':
            return {...state, percent: action.payload}
        default:
            return state
    }
}

export default initialPaymentReducer