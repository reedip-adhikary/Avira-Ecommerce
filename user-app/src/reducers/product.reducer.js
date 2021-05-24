import { userContants } from "../actions/constants"
import { productConstants } from "../actions/constants"

const initState = {
    error: null,
    message: '',
    loading: false,
    loading: false,
    product: []
}

export default (state = initState, action) => {
    switch (action.type) {
        case productConstants.GET_ALL_PRODUCTS_REQUEST:
            console.log("Here")
            state = {
                ...state,
                product: action.payload
            }
            break;
        case userContants.USER_REGISTER_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case userContants.USER_REGISTER_SUCCESS:
            state = {
                ...state,
                loading: false,
                message: action.payload.message
            }
            break;
        case userContants.USER_REGISTER_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error
            }
            break;
    }
    return state;
}