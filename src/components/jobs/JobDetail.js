import React, { useState, useEffect, useContext } from "react";
import { Button } from "reactstrap";
import UserContext from "../../UserContext";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

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
    <div>
      <Card body color="secondary mx-5 my-2" outline>
        <CardBody>
          <CardTitle className="text-success" tag="h5">
            {title}
          </CardTitle>
          <CardText className="text-dark">
            <p>Salary: {salary === null ? "Negotiable" : `$${salary}`}</p>
            <p>Equity: {equity === null ? "N/A" : equity}</p>
          </CardText>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <Button
              type="submit"
              color="success me-md-2"
              onClick={handleApply}
              disabled={applied}
            >
              {applied ? "APPLIED" : "APPLY"}
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default JobDetail;
