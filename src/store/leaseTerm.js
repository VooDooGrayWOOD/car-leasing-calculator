const defaultState = {
    month: 60
}

const leaseTermReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'CHANGE_MONTH':
            return {...state, month: action.payload}
        default:
            return state
    }
}

export default leaseTermReducer