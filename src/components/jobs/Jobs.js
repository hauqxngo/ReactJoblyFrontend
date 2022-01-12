import React from "react";
import JobDetail from "./JobDetail";

const Jobs = ({ jobs }) => {
  return (
    <div>
      {jobs.map((job) => (
        <JobDetail
          key={job.id}
          id={job.id}
          title={job.title}
          salary={job.salary}
          equity={job.equity}
          companyName={job.companyName}
        />
      ))}
    </div>
  );
};

export default Jobs;
