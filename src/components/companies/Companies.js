import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

/** Show some info of a company on the Company List
 *
 * CompanyList -> Companies
 */

const Companies = ({ name, description, handle }) => {
  return (
    <div className="CompanyCard">
      <Link className="text-decoration-none" to={`/companies/${handle}`}>
        <Card body color="secondary mx-5 my-2" outline>
          <CardBody>
            <CardTitle className="text-success" tag="h5">
              {name}
            </CardTitle>
            <CardText className="text-dark">{description}</CardText>
          </CardBody>
        </Card>
      </Link>
    </div>
  );
};

export default Companies;
