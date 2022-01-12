import React from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

const LoginForm = () => {
  return (
    <div className="col-md-4">
      <h3>Log In</h3>
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
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default LoginForm;
