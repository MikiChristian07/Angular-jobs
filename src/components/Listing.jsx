// import React from 'react';
import PropTypes from 'prop-types';

const Listing = ({ job }) => {
  if (!job) return null; // Guard clause for missing job prop

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          {job.type && <div className="text-gray-600 my-2">{job.type}</div>}
          {job.title && <h3 className="text-xl font-bold">{job.title}</h3>}
        </div>

        {job.description && <div className="mb-5">{job.description}</div>}

        {job.salary && <h3 className="text-indigo-500 mb-2">{job.salary}</h3>}

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          {job.location && (
            <div className="text-orange-700 mb-3">
              <i className="fa-solid fa-location-dot text-lg"></i> {job.location}
            </div>
          )}
          {job.id && (
            <a
              href={`/job/${job.id}`}
              className="h-[36px] bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
              Read More
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

Listing.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    type: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    salary: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
};

export default Listing;
