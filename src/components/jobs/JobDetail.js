import React, { useState, useEffect, useContext } from "react";
import { Button } from "reactstrap";
import UserContext from "../../UserContext";

const JobDetail = ({ id, title, salary, equity }) => {
  const [applied, setApplied] = useState();
  const { hasApplied, apply } = useContext(UserContext);

  useEffect(
    (updateAppliedButton) => {
      setApplied(hasApplied(id));
    },
    [id, hasApplied]
  );

  // Apply for a job
  async function handleApply() {
    if (hasApplied(id)) return;
    apply(id);
    setApplied(true);
  }

  return (
    <div className="mx-5">
      <h5>{title}</h5>
      <p>Salary: {salary === null ? "Negotiable" : `$${salary}`}</p>
      <p>Equity: {equity === null ? "N/A" : equity}</p>
      <Button
        type="submit"
        color="success mb-4"
        onClick={handleApply}
        disabled={applied}
      >
        {applied ? "APPLIED" : "APPLY"}
      </Button>
    </div>
  );
};

export default JobDetail;
