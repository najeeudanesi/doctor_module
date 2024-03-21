/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Routes, Route } from 'react-router';
import Dashboard from '../components/pages/Dashboard';
import Patients from '../components/pages/Patients';
import Facility from '../components/pages/Facility';
import CustomerManagement from '../components/pages/CustomerManagement';
import PatientDetails from '../components/pages/PatientDetails';
import AuthRoute from './AuthRoute';


;

export default () => (

    <Routes>
        <Route path="/dashboard" element={<AuthRoute><Dashboard /></AuthRoute>} />
        <Route path="/patients" element={<AuthRoute><Patients /> </AuthRoute>} />
        <Route path="/facility" element={<AuthRoute><Facility /></AuthRoute>} />
        <Route path="/customer-management" element={<AuthRoute><CustomerManagement /></AuthRoute>} />
        <Route path="/patient-details/:patientId" element={<AuthRoute><PatientDetails /></AuthRoute>} />
    </Routes>

);
