import React from "react";
import JobDetail from "./JobDetail";

/** Show list of job cards.
 *
 * Used by both JobList and CompanyDetail to list jobs. Receives an apply
 * func prop which will be called by JobDetail on apply.
 *
 * JobList -> Jobs -> JobDetail
 * CompanyDetail -> Jobs -> JobList
 *
 */

const Jobs = ({ jobs, apply }) => {
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
