import { types } from '../types/types';

const initialState = [];

export const currentTodosReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.setTasksUser:
            return action.payload;

        default:
            return state;
    }
};