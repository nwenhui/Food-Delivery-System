import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.scss";
import { userStore } from 'Store/UserStore';

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accessRights, setAccessRights] = useState(1);

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(username,password,accessRights)
    userStore.setData(username,password,accessRights);
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

  return (
    
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="username" bssize="large">
          <Form.Label>User Name</Form.Label>
          <Form.Control 
            autoFocus
            type="username"
            value={username}
            placeholder="Enter User Name"
            onChange={e => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="password" bssize="large">
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
          <Form.Control as="select" custom onChange={e=>setAccessRights(e.target.value)}>
            <option value="1" >FDS Manager</option>
            <option value="2">Staff</option>
            <option value="3">Rider</option>
            <option value="4">Customer</option>
          </Form.Control>
        </Form.Group>
        <Button variant="outline-primary" block bssize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;