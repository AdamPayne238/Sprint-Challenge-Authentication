import { START_AXIOS, AXIOS_SUCCESS, AXIOS_FAILURE, LOGIN_USER, REGISTER_USER} from "../actions";

const initialState = {
    jokesData: [],
    isFetching: false,
    error: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case START_AXIOS:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case AXIOS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                userData: action.payload
            };
        case AXIOS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            };
        case LOGIN_USER:
            return {
                ...state,
            };
        case REGISTER_USER:
            return {
                ...state,
            }
        default:
            return state;
    }
};

export default reducer;