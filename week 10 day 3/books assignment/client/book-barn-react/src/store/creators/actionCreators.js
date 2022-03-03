
import * as actionTypes from '../actions/actionTypes'

export const logIn = (username) => {
    return {
        type: actionTypes.LOGGED_IN,
        payload: username
    }
}

export const logOut = () => {
    return {
        type: actionTypes.LOGGED_OUT
    }
}

export const addToCart = () => {
    return {
        type: actionTypes.ADD_TO_CART
    }
}

export const addFavorite = (bookTitle) => {
    return {
        type: actionTypes.ADD_FAVORITE,
        payload: bookTitle
    }
}
