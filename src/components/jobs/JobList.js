import React, { useEffect, useState } from "react";
import JoblyApi from "../../api/api";
import CompanySearchForm from "../forms/CompanySearchForm";
import Jobs from "../jobs/Jobs";

/** Shows the list of all jobs from API
 *
 * Search box will filter companies to those matching
 *
 * Route /jobs
 *
 * Routes -> { JobSearchForm, Jobs }
 */

const JobList = () => {
  const [jobs, setJobs] = useState(null);

  useEffect(function getJobsOnMount() {
    search();
  }, []);

  async function search(title) {
    let jobs = await JoblyApi.getJobs(title);
    setJobs(jobs);
  }

  if (!jobs) return <div>Loading...</div>;

  return (
    <div>
      <CompanySearchForm searchFor={search} />
      {jobs.length ? <Jobs jobs={jobs} /> : <p>Sorry, no jobs were found.</p>}
    </div>
  );
};

export default JobList;
