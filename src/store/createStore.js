import { combineReducers, configureStore } from '@reduxjs/toolkit'
import costCarReducer from "./costCar";
import initialPaymentReducer from "./initialPayment";
import leaseTermReducer from "./leaseTerm";

const rootReducer = combineReducers({
    costCar: costCarReducer,
    initialPayment: initialPaymentReducer,
    leaseTerm: leaseTermReducer
})

export function createStore() {
    return configureStore({
        reducer: rootReducer
    })
}