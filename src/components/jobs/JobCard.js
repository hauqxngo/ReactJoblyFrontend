import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";

const JobCard = ({ id, title, salary, equity }) => {
  //   const [applied, setApplied] = useState();

  return (
    <div>
      <h5>{title}</h5>
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
      <Button type="submit" color="success">
        APPLY
      </Button>
    </div>
  );
};

export default JobCard;
