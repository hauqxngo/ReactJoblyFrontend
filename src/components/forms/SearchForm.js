import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const SearchForm = () => {
  return (
    <Form>
      <FormGroup className="SearchForm">
        <Label for="searchForm"></Label>
        <Input
          id="searchForm"
          name="search"
          placeholder="Enter search term..."
          type="search"
        />
        <Button type="submit" color="primary">
          Search
        </Button>
      </FormGroup>
    </Form>
  );
};

export default SearchForm;
