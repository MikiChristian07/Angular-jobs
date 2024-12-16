// import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';


const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen">
        <Outlet /> {/* This renders the nested route components */}
      </main>
    </div>
  );
};


export default MainLayout;