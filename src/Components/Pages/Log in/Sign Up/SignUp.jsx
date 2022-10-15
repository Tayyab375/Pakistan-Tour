import React, { useState, useRef } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiShow, BiHide } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";

// styling
import {
  BorderDiv,
  ErrorConfirmPasswordDiv,
  ErrorEmailDiv,
  ErrorNameDiv,
  ErrorPasswordDiv,
  Form,
  FormDiv,
  ParentDiv,
} from "../Login.styled";

const SignUp = () => {
  const form = useRef();

  const [eshow, seteShow] = useState(false); // show email error line
  const [pshow, setpShow] = useState(false); // show password error line
  const [nshow, setnShow] = useState(false); // show name error line
  const [cshow, setcShow] = useState(false); // show confirm password error line
  const [showPassword, setShowPassword] = useState(false); // change showPassword icon
  const [confirmShowPassword, setConfirmShowPassword] = useState(false); //change show Confirm Password icon

  // to store the info of email and password
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // -----------------on click function show password---------------
  const changeIcon = () => {
    setShowPassword(!showPassword);
  };

  const changeConfirmIcon = () => {
    setConfirmShowPassword(!confirmShowPassword);
  };

  // handle change in the fields
  let name, value;
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
    const errorName = document.querySelector("#naShow");
    const errorConfirmPassword = document.querySelector("#cpaShow");
    const errorEmailValue = errorEmail.value.length;
    const errorPasswordValue = errorPassword.value.length;
    const errorNameValue = errorName.value.length;
    const errorConfirmPasswordValue = errorConfirmPassword.value.length;

    // --------------condition to show the errors-----------
    if (
      errorEmailValue === 0 &&
      errorPasswordValue === 0 &&
      errorNameValue === 0 &&
      errorConfirmPasswordValue === 0
    ) {
      seteShow(true);
      setpShow(true);
      setnShow(true);
      setcShow(true);
    } else if (errorEmailValue === 0) {
      if (errorEmailValue === 0) {
        seteShow(true);
      }
      if (errorPasswordValue === 0) {
        setpShow(true);
      }
      if (errorNameValue === 0) {
        setnShow(true);
      }
      if (errorConfirmPasswordValue === 0) {
        setcShow(true);
      }
    } else if (errorPasswordValue === 0) {
      if (errorEmailValue === 0) {
        seteShow(true);
      }
      if (errorPasswordValue === 0) {
        setpShow(true);
      }
      if (errorNameValue === 0) {
        setnShow(true);
      }
      if (errorConfirmPasswordValue === 0) {
        setcShow(true);
      }
    } else if (errorNameValue === 0) {
      if (errorEmailValue === 0) {
        seteShow(true);
      }
      if (errorPasswordValue === 0) {
        setpShow(true);
      }
      if (errorNameValue === 0) {
        setnShow(true);
      }
      if (errorConfirmPasswordValue === 0) {
        setcShow(true);
      }
    } else if (errorConfirmPasswordValue === 0) {
      if (errorEmailValue === 0) {
        seteShow(true);
      }
      if (errorPasswordValue === 0) {
        setpShow(true);
      }
      if (errorNameValue === 0) {
        setnShow(true);
      }
      if (errorConfirmPasswordValue === 0) {
        setcShow(true);
      }
    } else {
      console.log(user);
      alert(
        `Thank you, ${user.name}. Your has been register to our website with you email: ${user.email} `
      );
      //   errorEmail.value = "";
      //   errorPassword.value = "";
      //   errorName.value = "";
      //   errorConfirmPassword.value = "";

      setUser({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }

    // --------------condition to hide the errors-----------
    if (errorEmailValue !== 0) {
      seteShow(false);
    }
    if (errorPasswordValue !== 0) {
      setpShow(false);
    }
    if (errorNameValue !== 0) {
      setnShow(false);
    }
    if (errorConfirmPasswordValue !== 0) {
      setcShow(false);
    }
  };

  return (
    <>
      <ParentDiv>
        <h3>Log in to your account</h3>
        <hr />

        <FormDiv>
          <Form ref={form} onSubmit={submitForm}>
            {/* name field */}
            <BorderDiv>
              <BsFillPersonFill size={28} />
              <input
                type="name"
                name="name"
                placeholder="Name"
                autoComplete="off"
                id="naShow"
                value={user.name}
                onChange={handleChange}
              />
            </BorderDiv>

            {/* error name */}
            <ErrorNameDiv>
              <p className={nshow ? "nshow" : null}>Please insert your name</p>
            </ErrorNameDiv>

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

            <BorderDiv>
              <RiLockPasswordFill size={28} />
              <input
                type={confirmShowPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                id="cpaShow"
                autoComplete="off"
                value={user.confirmPassword}
                onChange={handleChange}
              />
              <div onClick={changeConfirmIcon}>
                {confirmShowPassword ? (
                  <BiShow size={28} />
                ) : (
                  <BiHide size={28} />
                )}
              </div>
            </BorderDiv>

            {/* error confirm password */}
            <ErrorConfirmPasswordDiv>
              <p className={cshow ? "cshow" : null}>
                Please insert your confirm password
              </p>
            </ErrorConfirmPasswordDiv>

            {/* ---------submit button--------- */}
            <input type="submit" value="Sign Up" className="submit" />
          </Form>
        </FormDiv>
      </ParentDiv>
    </>
  );
};

export default SignUp;
