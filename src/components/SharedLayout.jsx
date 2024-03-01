import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const SharedLayout = () => {


  return (
    <div style={{ paddingTop: '64px' }}> {/* 64px is the height of the fixed navbar */}
      <Navbar />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
