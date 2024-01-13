/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Routes, Route } from 'react-router';


// import ProtectedRoute from './ProtectedRoute';
import Dashboard from '../components/pages/Dashboard';
import Patients from '../components/pages/Patients';

export default () => (
    <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/patients" element={<Patients />} />
        {/* <Route path="/doct" component={Dashboard} />
        <Route path="/doctor" component={Dashboard} /> */}
    </Routes>
);
