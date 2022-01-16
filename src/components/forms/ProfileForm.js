import React, { useContext, useState } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import UserContext from "../../UserContext";
import JoblyApi from "../../api/api";
import Message from "./Message";

/** Profile editing form
 *
 * Routed as /profile
 *
 * Routes -> ProfileForm -> Message
 */

const ProfileForm = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    username: currentUser.username,
    password: "",
  });
  const [errors, setErrors] = useState([]);
  const [confirmed, setConfirmed] = useState(false);

  /** on form submit:
   * - attempt save to backend & report any errors
   * - if successful
   *   - clear previous error messages and password
   *   - show save-confirmed message
   *   - set current user info throughout the site
   */

  async function handleSubmit(e) {
    e.preventDefault();

    let profileData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };

    let username = formData.username;
    let updatedUser;

    try {
      updatedUser = await JoblyApi.saveProfile(username, profileData);
    } catch (errors) {
      setErrors(errors);
      return;
    }

    setFormData((formData) => ({ ...formData, password: "" }));
    setErrors([]);
    setConfirmed(true);

    // trigger reloading of user information throughout the site
    setCurrentUser(updatedUser);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
    setErrors([]);
  }

  return (
    <div className="col-md-6 mx-5">
      <h3 className="text-success">Edit Profile</h3>
      <Form onSubmit={handleSubmit} inline>
        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
          <Label className="me-sm-2 my-3" for="username">
            Username: {formData.username}
          </Label>
        </FormGroup>

        <FormGroup className="mb-2 me-sm-2 mb-sm-0 my-3">
          <Label className="me-sm-2" for="firstName">
            First Name
          </Label>
          <Input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup className="mb-2 me-sm-2 mb-sm-0 my-3">
          <Label className="me-sm-2" for="lastName">
            Last Name
          </Label>
          <Input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup className="mb-2 me-sm-2 mb-sm-0 my-3">
          <Label className="me-sm-2" for="email">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup className="mb-2 me-sm-2 mb-sm-0 my-3">
          <Label className="me-sm-2" for="password">
            Enter your password to confirm:
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
        </FormGroup>

        {errors.length ? <Message type="danger" messages={errors} /> : null}

        {confirmed ? (
          <Message type="success" messages={["Updated successfully."]} />
        ) : null}

        <Button color="success my-4" outline>
          Save Changes
        </Button>
      </Form>
    </div>
  );
};

export default ProfileForm;
