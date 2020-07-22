import * as actionTypes from './actionTypes';
// eslint-disable-next-line
const initialState = {
    users:[],
    error: false
};

const reducer = (state=initialState, action)=>{
    switch (action.type) {
        case actionTypes.CREATE_USER:
            return {
                ...state,
                users: state.users.concat(action.user),
                error: false
            }
        case actionTypes.CREATE_USER_ERROR:
            return {
                ...state,
                error: true
            }
        case actionTypes.DELETE_USER:
            return {
                ...state,
                users: state.users.filter((user)=>{
                    return user._id !== action._id
                }),
                error: false
            }
        case actionTypes.DELETE_USER_ERROR:
            return {
                ...state,
                error: true
            }
        case actionTypes.SET_USERS:
            return {
                ...state,
                users: action.users,
                error: false
            }
        case actionTypes.SET_USERS_ERROR:
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }

};

export default reducer;