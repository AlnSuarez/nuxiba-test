import { types } from '../types/types';
import axios from 'axios';
// Set all values for Request Evaluation on Operative Expenses
export const setUsers = (data) => {
    return {
        type: types.setUser,
        payload: data,
    };
};

export const setCurrentUser = (data) => {
    return {
        type: types.setCurrentUser,
        payload: data,
    };
};

export const setPostUser = (data) => {
    return {
        type: types.setPostsUser,
        payload: data,
    };
};


export const setTaskUser = (data) => {
    return {
        type: types.setTasksUser,
        payload: data,
    };
};

// Get all users
export const getAllUsers = async () => {
    return await axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/users',
    });
};
