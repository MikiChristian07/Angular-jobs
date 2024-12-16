// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
const App = () => {


  return (
    <Router>
      <div>
        {/* Define Routes */}
        <Routes>
          {/*Routes under MainLayout will share the Navabr and other components*/}
          <Route path='/' element={<MainLayout />}>
            <Route index element={<HomePage />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Catch-all route for unmatched paths */}
            {/* <Route path="*" element={<NotFound />} /> */} 
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App

{/* <>
      <Navbar />
      <Hero title="Become an Angular Dev" />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />
    </> */}