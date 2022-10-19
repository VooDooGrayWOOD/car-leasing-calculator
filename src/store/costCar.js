const defaultState = {
    price: 3300000
}

const costCarReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'CHANGE_PRICE':
            return {...state, price: action.payload}
        default:
            return state
    }
}

export default costCarReducer