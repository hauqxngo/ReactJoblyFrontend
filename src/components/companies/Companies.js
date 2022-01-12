import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

/** Show some info of a company on the Company List
 *
 * CompanyList -> Companies
 */

const Companies = ({ name, description, handle }) => {
  return (
    <Link to={`/companies/${handle}`}>
      <div className="CompanyCard">
        <Card body color="primary" outline>
          <CardBody>
            <CardTitle tag="h5">{name}</CardTitle>
            <CardText>{description}</CardText>
          </CardBody>
        </Card>
      </div>
    </Link>
  );
};

export default Companies;