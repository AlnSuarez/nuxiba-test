import { types } from '../types/types';

const initialState = {};

export const currentUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.setCurrentUser:
            return action.payload;

        default:
            return state;
    }
};