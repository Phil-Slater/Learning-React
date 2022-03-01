import * as actionTypes from './actions/actionTypes'

const initialState = {
    user: '',
    isAuthenticated: false,
    cart: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGGED_IN:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true
            }

        case actionTypes.LOGGED_OUT:
            return {
                isAuthenticated: false,
                cart: 0
            }

        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                cart: state.cart + 1
            }
        default:
            return state
    }
}

export default reducer
