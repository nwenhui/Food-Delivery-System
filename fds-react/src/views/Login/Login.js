import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.scss";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
    props.history.push("/dashboard")
  }

  // async function handleSubmit(event) {
  //   event.preventDefault();
  
  //   try {
  //     await Auth.signIn(username, password);
  //     props.userHasAuthenticated(true);
  //     props.history.push("/dashboard");
  //   } catch (e) {
  //     alert(e.message);
  //   }
  // }
  const options = [
    { value: 1, label: 'FDS Manager' },
    { value: 2, label: 'Staff' },
    { value: 3, label: 'Rider' },
    { value: 4, label: 'Customer' }
  ];

  return (
    
    <div className="Login">
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
          <Form.Control as="select" custom>
            <option>FDS Manager</option>
            <option>Staff</option>
            <option>Rider</option>
            <option>Customer</option>
          </Form.Control>
        </Form.Group>
        <Button variant="outline-primary" block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;