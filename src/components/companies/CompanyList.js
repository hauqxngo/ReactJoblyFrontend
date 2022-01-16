import React, { useEffect, useState } from "react";
import JoblyApi from "../../api/api";
import SearchForm from "../forms/SearchForm";
import Companies from "./Companies";
import Loading from "../navigation/Loading";

/** Shows the list of all companies from API
 *
 * Search box will filter companies to those matching
 *
 * Routed as /companies
 *
 * Routes -> {SearchForm, Companies}
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

  if (!companies) return <Loading />;

  return (
    <div>
      <h3 className="text-center text-success">Top Fake Companies</h3>
      <SearchForm searchFor={search} />
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
        <p className="mx-5">Sorry, no companies were found.</p>
      )}
    </div>
  );
};

export default CompanyList;
