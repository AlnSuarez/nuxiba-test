import { types } from '../types/types';

const initialState = [];

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.setUser:
            return action.payload;

        default:
            return state;
    }
};
