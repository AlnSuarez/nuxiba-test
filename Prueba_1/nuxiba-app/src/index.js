import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './reducers/users';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from 'react-router-dom';
import { currentUserReducer } from './reducers/currentUser';
import { currentPostsReducer, currentTaskReducer } from './reducers/posts';
import Posts from './components/Posts';
import Todos from './components/Todos';
import { currentTodosReducer } from './reducers/todos';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: 'userPosts',
        element: <Posts />,
    },
    {
        path: 'userTodos',
        element: <Todos />,
    },
]);

const reducer = {
    users: usersReducer,
    currentUser: currentUserReducer,
    currentPosts: currentPostsReducer,
    currentTodos: currentTodosReducer,
};

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ChakraProvider>
                <RouterProvider router={router} />
            </ChakraProvider>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
