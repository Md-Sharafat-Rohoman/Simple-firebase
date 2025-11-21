import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';
import Home from '../../components/Home/Home';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import Orders from '../../components/Orders/Orders';
import Profile from '../../components/Profile/Profile';
import PriveteRouter from './PriveteRouter';
import Dashboard from '../../components/Dashboard/Dashboard';

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {index : true, Component: Home},
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component : Register
            },
            {
                path: '/orders',
                element: <PriveteRouter><Orders></Orders></PriveteRouter>
            },
            {
                path: '/profile',
                element: <PriveteRouter><Profile></Profile></PriveteRouter>
            },
            {
                path: '/dashboard',
                element: <PriveteRouter><Dashboard></Dashboard></PriveteRouter>
            }
        ]
    },
]);
export default router;