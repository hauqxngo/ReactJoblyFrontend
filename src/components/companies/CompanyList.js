import React, { useEffect, useState } from "react";
import JoblyApi from "../../api/api";
import CompanySearchForm from "../forms/CompanySearchForm";
import Companies from "./Companies";

/** Shows the list of all companies from API
 *
 * Search box will filter companies to those matching
 *
 * Route /companies
 *
 * Routes -> {CompanySearchForm, Companies}
 */

const CompanyList = () => {
  const [companies, setCompanies] = useState(null);

  useEffect(function getCompaniesOnMount() {
    search();
  }, []);

  async function search(name) {
    let companies = await JoblyApi.getCompanies(name);
    setCompanies(companies);
  }

  if (!companies) return <div>Loading...</div>;

  return (
    <div>
      <CompanySearchForm searchFor={search} />
      {companies.length ? (
        <div>
          {companies.map((c) => (
            <Companies
              key={c.handle}
              handle={c.handle}
              name={c.name}
              description={c.description}
            />
          ))}
        </div>
      ) : (
        <p>Sorry, no companies were found.</p>
      )}
    </div>
  );
};

export default CompanyList;
