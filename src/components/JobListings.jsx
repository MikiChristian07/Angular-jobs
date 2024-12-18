/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import Listing from './Listing';
import Spinner from './Spinner';

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]); // Jobs data state
  const [loading, setLoading] = useState(true); // Loading state
  const [delayed, setDelayed] = useState(false); // Delay before showing spinner

  // Simulate a delay before showing the spinner (e.g., 2 seconds)
  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setDelayed(true); // Show spinner after 2 seconds
    }, 2000);
    return () => clearTimeout(delayTimer); // Cleanup the timeout on unmount
  }, []);

  // Fetch jobs data from the API
  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? 
      '/api/jobs?_limit=3' : 
      '/api/jobs';
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setLoading(false); // Stop loading when the fetch finishes
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-red-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>

        {/* Show Spinner with a delay if loading is true and delayed state is set */}
        {loading && delayed ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Render job listings after fetching */}
            {jobs.map((job) => (
              <Listing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
