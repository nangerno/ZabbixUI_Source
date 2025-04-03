import React, { useState, useEffect } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { SiApple } from "react-icons/si";
import { CgMicrosoft } from "react-icons/cg";
import Layout from "./Layout";

const AuthContainer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Check local storage for login state
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      localStorage.setItem("loggedInUser", username);
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  return (
    <Container fluid style={{ overflow: "hidden" }}>
      {isLoggedIn ? (
        <Layout handleLogout={handleLogout} />
      ) : (
        <Row>
          <Col xl={6} className="d-none d-xl-block" style={{ backgroundImage: "url(/loginbg.png)", backgroundSize: "100% 100%", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}></Col>
          <Col xl={6} sm={12} style={{ backgroundColor: "black" }}>
            <div className="d-flex justify-content-center align-items-center vh-100">
              <Form onSubmit={handleLogin} style={{ width: "500px", padding: "20px", color: "white" }}>
                <Form.Group className="mb-3">
                  <h1>Login</h1>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    className="login-input"
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    className="login-input"
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <a href="#forgetpassword" className="text-decoration-none text-primary">
                  <p>Forgot password?</p>
                </a>
                <Button variant="primary" type="submit" className="w-100">
                  Login
                </Button>

                <div className="d-flex align-items-center my-3">
                  <hr className="flex-grow-1" />
                  <span className="mx-2">Or&nbsp;&nbsp;</span>
                  <hr className="flex-grow-1" />
                </div>
                <div className="d-flex align-items-center my-3 gap-2">
                  <Button variant="outline-primary" className="w-100 icon-login-btn" style={{ borderRadius: "20px" }}>
                    <SiApple size={20} /> Log in with Apple
                  </Button>
                  <Button variant="outline-primary" className="w-100 icon-login-btn" style={{ borderRadius: "20px" }}>
                    <FcGoogle size={20} /> Log in with Google
                  </Button>
                </div>
                <div className="d-flex justify-content-center align-item-center">
                  <Button variant="outline-primary" className="w-50 icon-login-btn" style={{ borderRadius: "20px" }}>
                    <CgMicrosoft size={20} /> Log in with Microsoft
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default AuthContainer;
