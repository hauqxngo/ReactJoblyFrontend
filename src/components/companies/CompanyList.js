import React, { useEffect, useState } from "react";
import JoblyApi from "../../api/JoblyAPI";
import SearchForm from "../forms/SearchForm";

/** Showing the list of all companies from API
 *
 * Search box will filter companies to those matching
 *
 * This component is routed to /companies
 */

const CompanyList = () => {
  const [companies, setCompanies] = useState(null);

  useEffect(function getCompanies() {
    async function search(name) {
      let companies = JoblyApi.getCompany(name);
      setCompanies(companies);
    }
    search();
  }, []);

  if (!companies) return <div>Loading...</div>;

  return (
    <div>
      <SearchForm />
    </div>
  );
};

export default CompanyList;
