// import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaMapMarker } from 'react-icons/fa';

const Listing = ({ job }) => {

  const [showFullDescription, setShowfullDescription] = useState(false);

  let description = job.description;

  if (!showFullDescription) {
    description = description.substring(0, 90) + '...'
  }


  if (!job) return null; // Guard clause for missing job prop

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          {job.type && <div className="text-gray-600 my-2">{job.type}</div>}
          {job.title && <h3 className="text-xl font-bold">{job.title}</h3>}
        </div>

        {job.description && <div className="mb-5">{description}</div>}

        <button onClick={() => setShowfullDescription((prevState) => !prevState)} className="text-red-500 mb-5 hover:text-red-600">
          {showFullDescription ? 'Less' : 'More'}
        </button>

        {job.salary && <h3 className="text-indigo-500 mb-2">{job.salary}</h3>}

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          {job.location && (
            <div className="text-orange-700 mb-3">
              <FaMapMarker className='inline text-lg mb-1 mr-1'/> {job.location}
            </div>
          )}
          {job.id && (
            <Link
              to={`/job/${job.id}`}
              className="h-[36px] bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
              Read More
            </Link>
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
