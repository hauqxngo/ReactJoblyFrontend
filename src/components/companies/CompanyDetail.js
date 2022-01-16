import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../../api/api";
import Jobs from "../jobs/Jobs";
import Loading from "../navigation/Loading";

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

  if (!company) return <Loading />;

  return (
    <div>
      <h1 className="text-success text-center">{company.name}</h1>
      <p className="text-center">{company.description}</p>
      <Jobs jobs={company.jobs} />
    </div>
  );
};

export default CompanyDetail;
