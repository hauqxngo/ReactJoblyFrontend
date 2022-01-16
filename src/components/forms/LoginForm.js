import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import Message from "./Message";

/** Login form.
 *
 * On submission:
 * - calls login function prop
 * - redirects to /companies route
 *
 * Routed as /login
 *
 * Routes -> LoginForm -> Alert
 */

const LoginForm = ({ login }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  console.debug(
    "LoginForm",
    "login=",
    typeof login,
    "formData=",
    formData,
    "errors",
    errors
  );

  async function handleSubmit(e) {
    e.preventDefault();
    let res = await login(formData);
    if (res.success) {
      history.push("/companies");
    } else {
      setErrors(res.errors);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  }

  return (
    <div className="col-md-4">
      <h3>Log In</h3>
      <Form onSubmit={handleSubmit} inline>
        <FormGroup floating>
          <Input
            id="username"
            name="username"
            placeholder="Username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            autoComplete="username"
            required
          />
          <Label for="username">Username</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            id="password"
            name="password"
            placeholder="Password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="current-password"
            required
          />
          <Label for="password">Password</Label>
        </FormGroup>{" "}
        {errors.length ? <Message type="danger" messages={errors} /> : null}
        <Button color="primary">Submit</Button>
      </Form>
    </div>
  );
};

export default LoginForm;
