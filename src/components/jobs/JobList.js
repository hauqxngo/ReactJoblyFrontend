import React, { useEffect, useState } from "react";
import JoblyApi from "../../api/api";
import SearchForm from "../forms/SearchForm";
import Jobs from "../jobs/Jobs";
import Loading from "../navigation/Loading";

/** Shows the list of all jobs from API
 *
 * Search box will filter companies to those matching
 *
 * Routed as /jobs
 *
 * Routes -> { SearchForm, Jobs }
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

  if (!jobs) return <Loading />;

  return (
    <div>
      <h3 className="text-center text-success">Top Fake Jobs</h3>
      <SearchForm searchFor={search} />
      {jobs.length ? (
        <Jobs jobs={jobs} />
      ) : (
        <p className="mx-5">Sorry, no jobs were found.</p>
      )}
    </div>
  );
};

export default JobList;
