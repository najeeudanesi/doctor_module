/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import { RiBarChartFill, RiHeartPulseLine, RiHotelBedFill, RiHealthBookLine } from 'react-icons/ri';
// import { BiEnvelope } from 'react-icons/bi';
// import { HiOutlineUserAdd } from 'react-icons/hi';
// import { CgUserList } from 'react-icons/cg';

export default [
    { title: 'Dashboard', href: '/dashboard', icon: <RiBarChartFill className="icon" /> },
    { title: 'Patient', href: '/patients', icon: <RiHealthBookLine className="icon" /> },
    { title: 'Facility', href: '/facility', icon: <RiHotelBedFill className="icon" /> },
    { title: 'Customer Management', href: '/customer-management', icon: <RiHeartPulseLine className="icon" /> },


];
