import React from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

const SignupForm = () => {
  return (
    <div className="col-md-4">
      <h3>Sign Up</h3>
      <Form inline>
        <FormGroup floating>
          <Input
            id="username"
            name="username"
            placeholder="Username"
            type="text"
          />
          <Label for="username">Username</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            id="password"
            name="password"
            placeholder="Password"
            type="password"
          />
          <Label for="password">Password</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            id="firstName"
            name="fname"
            placeholder="First name"
            type="text"
          />
          <Label for="fname">First name</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            id="lastName"
            name="lname"
            placeholder="Last name"
            type="text"
          />
          <Label for="lname">Last name</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input id="email" name="email" placeholder="Email" type="email" />
          <Label for="email">Email</Label>
        </FormGroup>{" "}
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default SignupForm;
