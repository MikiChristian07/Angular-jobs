import { useLoaderData } from 'react-router-dom';

const JobPage = () => {
    // const { id } = useParams();
    const job = useLoaderData();

    // Render a fallback UI if `job` is null or undefined
    if (!job) {
        return <p>Job not found or failed to load.</p>;
    }

    return <h1>{job.title}</h1>;
};

const jobLoader = async ({ params }) => {
    try {
        const res = await fetch(`/api/jobs/${params.id}`);
        if (!res.ok) {
            throw new Error(`Failed to fetch job with ID: ${params.id}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error loading job:", error);
        // Throw the error to let React Router handle it with an error boundary
        throw new Response("Failed to load job data.", { status: 500 });
    }
};

export { JobPage as default, jobLoader };
