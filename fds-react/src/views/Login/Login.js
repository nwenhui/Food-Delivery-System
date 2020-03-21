import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.scss";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setType] = useState(1);

  const options = [
    { value: 1, label: 'FDS Manager' },
    { value: 2, label: 'Staff' },
    { value: 3, label: 'Rider' },
    { value: 4, label: 'Customer' }
  ];

  const dropdown = options.map((option) =>
    <option key={option.value.toString()} value={option.value}>{option.label}</option>
  );

  function validateForm() {
    // TODO:
    // Insert SQL query to validate existence.
    return username.length > 0 && password.length > 0;
  }

  function handleSignUp() {
    props.history.push("/signup");
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("username: " + username);
    console.log("password: " + password);
    console.log("usertype: " + usertype);
    // TODO:
    // send the above data to the backend as input for SQL query.
    // HTTP request

    // convert string to number
    var user_type = Number(usertype);

    if (user_type === options[0].value) {
      console.log("reached manager");
      props.history.push("/manager_dashboard");

    } else if (user_type === options[1].value) {
      props.history.push("/staff_dashboard");

    } else if (user_type === options[2].value) {
      props.history.push("/rider_dashboard");

    } else if (user_type === options[3].value) {
      console.log("reached customer");
      props.history.push("/customer_dashboard");

    } else {
      props.history.push("/not-found");
    }
  }

  return (

    <div className="Login">
      <div className="Welcome">
        <h2>Welcome to the Food Delivery System</h2>
      </div>

      <div className="SigninForm">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="username" bsSize="large">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              autoFocus
              type="username"
              value={username}
              placeholder="Enter User Name"
              onChange={e => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="password" bsSize="large">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              placeholder="Enter Password"
              onChange={e => setPassword(e.target.value)}
              type="password"
            />
          </Form.Group>
          <Form.Group controlId="selectCustom">
            <Form.Label>User Type</Form.Label>
            <Form.Control as="select" custom onChange={e => setType(e.target.value)}>
              {dropdown}
            </Form.Control>
          </Form.Group>
          <Button variant="outline-primary" block bsSize="large" disabled={!validateForm()} type="submit">
            Login
          </Button>
        </Form>
      </div>

      <div className="Signup">
        <p>Are you a newcomer?</p>
        <Button variant="outline-secondary" block bsSize="large" onClick={handleSignUp}>
          Sign Up
        </Button>
      </div>

    </div>
  );
}

export default Login;
