import axios from 'axios';

import * as actionTypes from './actionTypes'

export const createUser = (user) => {
    return {
        type: actionTypes.CREATE_USER,
        user
    };
};

export const createUserError = () => {
    return {
        type: actionTypes.CREATE_USER_ERROR
    };
};

export const destroyUser = (_id) => {
    return {
        type: actionTypes.DELETE_USER,
        _id
    };
};

export const destroyUserError = () => {
    return {
        type: actionTypes.CREATE_USER_ERROR
    };
};

export const setUsersList = (users)=>{
    return{
        type: actionTypes.SET_USERS,
        users
    }
}

export const setUsersError = ()=>{
    return{
        type: actionTypes.SET_USERS_ERROR
    }
}

export const saveUser = (user) => {
    return async (dispatch) => {
        try {
            if(user._id === null) {
                delete user._id;
            }
            const {data} = await axios.post('http://localhost:4000/users', user);
            dispatch(createUser(data));
            console.log("DATA", data);
        } catch (e) {
            dispatch(createUserError());
        }

    }
};

export const deleteUser = (_id) => {
    return async (dispatch) => {
        try {
            await axios.delete('http://localhost:4000/users/?_id=' + _id);
            dispatch(destroyUser(_id));
        } catch (e) {
            dispatch(destroyUserError());
        }
    }
};

export const setUsers = () => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get('http://localhost:4000/users');
            console.log(data);
            dispatch(setUsersList(data));
        } catch (e) {
            dispatch(setUsersError());
            console.log("Error saveUser: ", e);
        }

    }

};



