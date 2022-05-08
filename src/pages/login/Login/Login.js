import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase-init";
import Loading from "../../share/Loading/Loading";
import SocialLogin from "../../SocialLogin/SocialLogin";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import axios from "axios";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location?.state?.from?.pathname || "/";
  let errorElement;

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, error1] =
    useSendPasswordResetEmail(auth);

  if (loading || sending) {
    return <Loading></Loading>;
  }

  if (error || error1) {
    errorElement = <p className="text-danger"> Error: {error?.message}</p>;
  }

  if (user) {
    // navigate(from, { replace: true });
  }

  const handleLoginForm = async(event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (email && password) {
     await signInWithEmailAndPassword(email, password);
     const {data} = await axios.post('https://quiet-taiga-62097.herokuapp.com/login', {email});
     console.log(data);
    }
  };
  const navigateRegister = () => {
    navigate("/register");
  };

  const handleResetPass = () => {
    const email = emailRef.current.value;
    if (email) {
      sendPasswordResetEmail(email);
      alert("Sent Email Success");
    }
  };

  return (
    <div className="container w-25 mx-auto border p-5 mt-4 rounded-3">
      <h3 className="text-center text-info pb-4">Please Login</h3>
      <Form onClick={handleLoginForm}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="ms-3 me-5">
          Login
        </Button>
        <button
          className="btn btn-warning ms-5 p-1 text-danger"
          onClick={handleResetPass}
        >
          Reset Pass...
        </button>
        <p>
          <small>{errorElement}</small>
        </p>
      </Form>
      <p className="mt-4">
        New to WareHouse{" "}
        <Link
          to="/register"
          className="text-primary text-decoration-none"
          onClick={navigateRegister}
        >
          Please Register!!!
        </Link>
      </p>

      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
