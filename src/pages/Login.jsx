import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { updateAuth } from "../store/slices/authSlice";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formSignIn, setFormSignIn] = useState({ username: "", password: "" });
  const sequenceFunc = (func) =>
    new Promise((resolve, reject) => resolve(func));

  const handleSignIn = (e) => {
    e.preventDefault();

    sequenceFunc(
      dispatch(updateAuth({ username: formSignIn.username, isLoggedIn: true }))
    ).then(() => navigate("/main"));
  };

  return (
    <Container
      fluid
      className="min-vh-100 d-flex justify-content-center align-items-center"
    >
      <div className="w-25">
        <div className="fs-2 text-center mb-3">LOGIN</div>
        <Card body className="shadow-sm py-2 px-3 rounded-0">
          <div className="fs-6 text-center mb-2">Sign in with your session</div>
          <Form onSubmit={handleSignIn}>
            <Form.Control
              type="text"
              placeholder="Username"
              className="mb-3"
              onChange={(e) =>
                setFormSignIn({ ...formSignIn, username: e.target.value })
              }
              required
            />
            <Form.Control
              type="password"
              placeholder="Password"
              className="mb-3"
              onChange={(e) =>
                setFormSignIn({ ...formSignIn, password: e.target.value })
              }
              required
            />
            <Button type="submit" className="w-100">
              Sign In
            </Button>
          </Form>
        </Card>
      </div>
    </Container>
  );
}
