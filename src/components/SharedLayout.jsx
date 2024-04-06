import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const SharedLayout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);


  return (
    <div style={{ paddingTop: '64px' }}> {/* 64px is the height of the fixed navbar */}
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
