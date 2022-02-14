import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import img from "../../Images/login.jpg";
import useAuth from "../Hooks/useAuth";
import Menubar from "../Shared/Menubar/Menubar";
import "./Login.css";

const Login = () => {
  const {
    singInWithGoogle,
    handleRegistration,
    handleEmailChange,
    handlePasswordChange,
    error,
    toggleLogin,
    isLogin,
    handleNameChange,
  } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home";

  console.log("came from", location?.state?.from);

  const handleGoogleLogin = () => {
    singInWithGoogle().then((result) => {
      history.push(redirect_url);
    });
  };

  return (
    <div className="p">
      <div>
        <Menubar></Menubar>
      </div>

      <Container fluid>
        <Row className="mt-5">
          <Col md={6}>
            <img style={{ width: "60%" }} src={img} alt="" />
          </Col>

          <Col md={6}>
            <Col md={6} xs={12} sm={3}>
              <h3 className="text-success">Please {isLogin ? "Login" : "Register"} </h3>
              <h3 className="text-danger"> {error} </h3>

              <Button className="btn btn-success" onClick={handleGoogleLogin}>
                <span className="text-center ">Google Sign In </span>
              </Button>
            </Col>

            <Row>
              <Col md={6} xs={12} sm={6}>
                <br />
                <p className="mb-2">or</p>
              </Col>
            </Row>

            <Row>
              <Col md={6} xs={12} sm={6}>
                <form>
                  {!isLogin && (
                    <div className="input-group">
                      <input
                        onBlur={handleNameChange}
                        type="text"
                        className="form-control"
                        name="username"
                        placeholder="User Name"
                        required
                      />
                    </div>
                  )}

                  <br />

                  <div className="input-group">
                    <input
                      onBlur={handleEmailChange}
                      type="text"
                      className="form-control"
                      name="username"
                      placeholder="email address"
                      required
                    />
                  </div>

                  <br />
                  <div className="input-group">
                    <input
                      onBlur={handlePasswordChange}
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <br />

                  <button
                    onClick={handleRegistration}
                    className="btn btn-success btn-block"
                    type="submit"
                  >
                    {isLogin ? "Login" : "Register"}
                  </button>
                </form>
              </Col>
            </Row>
            <Row>
              <Col md={6} xs={12} sm={3}>
                <label className="checkbox mt-2">
                  <input
                    onChange={toggleLogin}
                    type="checkbox"
                    value="remember-me"
                  />
                  <span> Already Registered </span>
                </label>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
