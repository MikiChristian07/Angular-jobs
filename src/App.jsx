
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import Jobspage from './pages/Jobspage';
import NotFoundPage from './pages/NotFoundPage';


const App = () => {
  return (
    
    <Router>
        {/* Define Routes */}
        <Routes>
          {/*Routes under MainLayout will share the Navabr and other components*/}
          <Route path='/' element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/jobs" element={<Jobspage />} />
            <Route path="*" element={<NotFoundPage />} /> 
            {/* <Route path="/contact" element={<Contact />} /> */}
            {/* Catch-all route for unmatched paths */}
            {/* <Route path="*" element={<NotFound />} /> */} 
          </Route>
        </Routes>
    </Router>
  )
}

export default App;

{/* <>
      <Navbar />
      <Hero title="Become an Angular Dev" />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />
    </> */}