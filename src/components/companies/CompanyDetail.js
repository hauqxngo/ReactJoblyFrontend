import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../../api/api";
import Jobs from "../jobs/Jobs";

/** Show the company detail with its job list
 *
 * Route /companies/:handle
 *
 * Routes -> CompanyDetail -> JobList
 */

const CompanyDetail = () => {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(
    function getCompanyDetail() {
      async function getCompany() {
        let comp = await JoblyApi.getCompany(handle);
        setCompany(comp);
      }
      getCompany();
    },
    [handle]
  );

  if (!company) return <div>Loading...</div>;

  return (
    <div>
      <h1>{company.name}</h1>
      <p>{company.description}</p>
      <Jobs jobs={company.jobs} />
    </div>
  );
};

export default CompanyDetail;
