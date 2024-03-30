/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Routes, Route } from 'react-router';
import Dashboard from '../components/pages/Dashboard';
import Patients from '../components/pages/Patients';
import Facility from '../components/pages/Facility';
import PatientDetails from '../components/pages/PatientDetails';
import AuthRoute from './AuthRoute';
import CustomerEngagement from '../components/pages/CustomerEngagement';


;

export default () => (

    <Routes>
        <Route path="/dashboard" element={<AuthRoute><Dashboard /></AuthRoute>} />
        <Route path="/patients" element={<AuthRoute><Patients /> </AuthRoute>} />
        <Route path="/facility" element={<AuthRoute><Facility /></AuthRoute>} />
        <Route path="/customer-engagement" element={<AuthRoute><CustomerEngagement /></AuthRoute>} />
        <Route path="/patient-details/:patientId" element={<AuthRoute><PatientDetails /></AuthRoute>} />
    </Routes>

);
