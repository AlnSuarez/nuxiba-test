import { types } from '../types/types';

const initialState = {};

export const currentPostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.setPostsUser:
            return action.payload;

        default:
            return state;
    }
};