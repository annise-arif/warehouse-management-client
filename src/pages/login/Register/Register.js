import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase-init";
import Loading from "../../share/Loading/Loading";
import SocialLogin from "../../SocialLogin/SocialLogin";

const Register = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate();
    const location = useLocation();
    let from = location?.state?.from?.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    let errorElement;


    if(loading){
        return <Loading></Loading>;
      }
    
      if(error){
        errorElement = <p className='text-danger'> Error: {error?.message}</p>  
      }
    
      if(user){
        navigate(from, { replace: true});
      }

    const handleLoginForm = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        if(email && password){
          createUserWithEmailAndPassword(email, password);
        }
      }
      const navigateRegister = () => {
        navigate("/login");
      };
  return (
    <div className="container w-50 mx-auto border p-5 mt-4 rounded-3">
      <h3 className="text-center text-info pb-4">Please Register</h3>
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
        <Button variant="primary" type="submit">
          Login
        </Button>
        <p>
          <small>{errorElement}</small>
        </p>
      </Form>
      <p className="mt-4">New to Car Warehouse? <Link to="/login" className="text-primary text-decoration-none" onClick={navigateRegister}>
        Please Login
      </Link>
    </p>
    <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
