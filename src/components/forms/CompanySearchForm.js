import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

/** Search box in Company List page
 *
 * CompanyList -> CompanySearchForm
 */

const CompanySearchForm = ({ searchFor }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // get rid of the extra spaces
    let term = searchTerm.trim();
    searchFor(term || undefined);
    setSearchTerm("");
  };

  // update value in form
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup className="SearchForm">
        <Label for="searchForm"></Label>
        <Input
          id="searchForm"
          name="search"
          placeholder="Enter search term..."
          value={searchTerm}
          onChange={handleChange}
        />
        <Button type="submit" color="primary">
          Search
        </Button>
        <Button>
          <Link to="/companies" />
          Reset
        </Button>
      </FormGroup>
    </Form>
  );
};

export default CompanySearchForm;
