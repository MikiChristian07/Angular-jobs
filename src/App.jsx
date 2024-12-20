import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';

const App = () => {

  const addJob = (newJob) => {
    console.log(newJob);
  }
  
  // Define the routes using createBrowserRouter
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'jobs', element: <JobsPage /> },
        { path: 'add-job', element: <AddJobPage addJobSubmit={addJob} /> },
        {
          path: 'jobs/:id',
          element: <JobPage />,
          loader: jobLoader, // Attach the loader here
        },
        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ]);
  

  return <RouterProvider router={router} />;
  
};

export default App;
