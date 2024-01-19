/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Routes, Route } from 'react-router';


// import ProtectedRoute from './ProtectedRoute';
import Dashboard from '../components/pages/Dashboard';
import Patients from '../components/pages/Patients';
import Facility from '../components/pages/Facility';
import CustomerManagement from '../components/pages/CustomerManagement';

export default () => (
    <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/facility" element={<Facility />} />
        <Route path="/customer-management" element={<CustomerManagement />} />
    </Routes>
);
