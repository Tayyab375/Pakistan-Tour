import React, { useState, useRef } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiShow, BiHide } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import {
  BorderDiv,
  ErrorEmailDiv,
  ErrorPasswordDiv,
  Form,
  FormDiv,
  ParentDiv,
} from "./Login.styled";

const Login = () => {
  const form = useRef();

  const [eshow, seteShow] = useState(false); // show email error line
  const [pshow, setpShow] = useState(false); // show password error line
  const [showPassword, setShowPassword] = useState(false); // change showPassword icon

  // to store the info of email and password
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // -----------------on click function show password---------------
  const changeIcon = () => {
    setShowPassword(!showPassword);
  };

  let name, value;
  // handle change in the fields
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  // function to submit the form
  const submitForm = (e) => {
    e.preventDefault();

    // -----------------on click function validation---------------
    const errorEmail = document.querySelector("#emShow");
    const errorPassword = document.querySelector("#paShow");
    const errorEmailValue = errorEmail.value.length;
    const errorPasswordValue = errorPassword.value.length;

    // --------------condition to show the errors-----------
    if (errorEmailValue === 0 && errorPasswordValue === 0) {
      seteShow(true);
      setpShow(true);
    } else if (errorEmailValue === 0) {
      seteShow(true);
    } else if (errorPasswordValue === 0) {
      setpShow(true);
    } else {
      console.log(user);
      alert(`thanks for login ${user.email}`);

      setUser({
        email: "",
        password: "",
      });
    }

    // --------------condition to hide the errors-----------
    if (errorEmailValue !== 0 && errorPasswordValue !== 0) {
      seteShow(false);
      setpShow(false);
    } else if (errorEmailValue !== 0) {
      seteShow(false);
    } else if (errorPasswordValue !== 0) {
      setpShow(false);
    }
  };

  return (
    <>
      <ParentDiv>
        <h3>Log in to your account</h3>
        <hr />

        <FormDiv>
          <Form ref={form} onSubmit={submitForm}>
            {/* email field */}

            <BorderDiv>
              <AiOutlineMail size={28} />
              <input
                type="email"
                name="email"
                placeholder="Email"
                id="emShow"
                value={user.email}
                onChange={handleChange}
              />
            </BorderDiv>

            {/* error email */}
            <ErrorEmailDiv>
              <p className={eshow ? "eshow" : null}>Please insert your email</p>
            </ErrorEmailDiv>

            {/* password field */}

            <BorderDiv>
              <RiLockPasswordFill size={28} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                id="paShow"
                autoComplete="off"
                value={user.password}
                onChange={handleChange}
              />
              <div onClick={changeIcon}>
                {showPassword ? <BiShow size={28} /> : <BiHide size={28} />}
              </div>
            </BorderDiv>

            {/* error password */}
            <ErrorPasswordDiv>
              <p className={pshow ? "pshow" : null}>
                Please insert your password
              </p>
            </ErrorPasswordDiv>

            {/* ---------submit button--------- */}
            <input type="submit" value="Log In" className="submit" />
          </Form>
        </FormDiv>

        <p>
          Don't have an account?{" "}
          <Link to={"/sign-up"} className="link">
            Sign Up
          </Link>
        </p>
      </ParentDiv>
    </>
  );
};

export default Login;
