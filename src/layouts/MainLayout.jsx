// import React from 'react'
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Navbar from '../components/Navbar';


const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen">
        <Outlet /> {/* This renders the nested route components */}
      </main>
      <ToastContainer />
    </div>
  );
};


export default MainLayout;