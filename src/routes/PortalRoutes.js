/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Routes, Route } from 'react-router';


// import ProtectedRoute from './ProtectedRoute';
import Dashboard from '../components/pages/Dashboard';

export default () => (
    <Routes>
        <Route path="/doctor" component={Dashboard} />
        <Route path="/do" component={Dashboard} />
        <Route path="/doct" component={Dashboard} />
        <Route path="/doctor" component={Dashboard} />
    </Routes>
);
