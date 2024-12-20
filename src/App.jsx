import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';

const App = () => {
  // Fixing the typo in the `addJob` function to add a new job
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST', // Corrected from 'methods' to 'method'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });

    if (!res.ok) {
      console.error('Failed to add the job:', res.statusText);
      return;
    }

    return await res.json(); // Return the result if needed
  };

  // Function to delete a job 
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE', // Corrected from 'methods' to 'method'
    });

    if (!res.ok) {
      console.error('Failed to delete the job:', res.statusText);
      return;
    }

    return await res.json(); // Return the result if needed
  }
  
  // function to update the job
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT', // Corrected from 'methods' to 'method'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });

    if (!res.ok) {
      console.error('Failed to add the job:', res.statusText);
      return;
    }

    return await res.json(); // Return the result if needed
  }


  // Define the routes using createBrowserRouter
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'jobs', element: <JobsPage /> },
        { 
          path: 'add-job', 
          element: <AddJobPage addJobSubmit={addJob} /> 
        },
        {
          path: 'jobs/:id',
          element: <JobPage deleteJob={ deleteJob } />,
          loader: jobLoader, // Attach the loader here
        },
        {
          path: 'edit-job/:id',
          element: <EditJobPage updateJobSubmit={updateJob}/>,
          loader: jobLoader,
        },
        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
