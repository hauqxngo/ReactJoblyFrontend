import React from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";

const Home = ({ login }) => {
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    await login({
      username: "testuser",
      password: "password",
    });
    history.push("/companies");
  }

  return (
    <div className="container">
      <div className="Home">
        <h1>Welcome to Jobly!</h1>
        <p className="Home-description">
          Find your dream jobs at top fake companies.
        </p>
        <form onSubmit={handleSubmit}>
          <button className="btn btn-success mt-4">DEMO USER</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
