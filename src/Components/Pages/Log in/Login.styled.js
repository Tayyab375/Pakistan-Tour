import styled from "styled-components";
import { black, drakGreen, green } from "../../Reusable/Colors";

// --------------------parent div styling---------------------------

export const ParentDiv = styled.div`
  width: 40%;
  margin: auto;
  margin-top: 5.5%;

  @media screen and (max-width: 756px) {
    width: 80%;
  }

  h3 {
    color: ${black};
    margin-left: 5%;
  }

  hr {
    margin: 4% 0;
    background: #888;
    border: 0;
    width: 100%;
    height: 1.5px;
  }

  & .submit {
    width: 100%;
    font-size: 1.1rem;
    background: ${drakGreen};
    border: 0;
    cursor: pointer;
    color: white;
    font-weight: 500;
    padding: 10px 0;
    transition: 0.6s ease;

    :hover {
      background: rgb(30, 86, 49);
    }
  }

  p {
    text-align: center;
    color: ${black};
    margin-top: 7px;
  }

  .link {
    color: ${drakGreen};
    font-weight: 500;
    text-decoration: none;
    transition: 0.6s ease;

    :hover {
      color: ${green};
    }
  }
`;

// --------------------form div styling---------------------------

export const FormDiv = styled.div`
  width: 100%;
  padding: 0 5%;
`;

// --------------------form styling---------------------------

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    font-size: 1.15rem;
    width: 100%;
    border: 0;
    background: transparent;
    outline: 0;

    @media screen and (max-width: 756px) {
      font-size: 0.87rem;
    }
  }
`;

// --------------------border of input field styling---------------------------

export const BorderDiv = styled.div`
  margin-bottom: 9px;
  border: 1.5px solid ${black};
  padding: 2%;
  display: flex;
  gap: 5px;
  align-items: center;
`;

// --------------------error of email styling---------------------------

export const ErrorEmailDiv = styled.div`
  p {
    color: red;
    margin-bottom: 7px;
    font-size: 15px;
    display: none;
    text-align: left;

    &.eshow {
      display: block;
    }
  }
`;

// --------------------error of name styling---------------------------

export const ErrorNameDiv = styled.div`
  p {
    color: red;
    margin-bottom: 7px;
    font-size: 15px;
    display: none;
    text-align: left;

    &.nshow {
      display: block;
    }
  }
`;

// --------------------error of confirm password styling---------------------------

export const ErrorConfirmPasswordDiv = styled.div`
  p {
    color: red;
    display: none;
    margin-bottom: 7px;
    font-size: 15px;
    text-align: left;

    &.cshow {
      display: block;
    }
  }
`;

// --------------------error  password styling---------------------------

export const ErrorPasswordDiv = styled.div`
  p {
    color: red;
    margin-bottom: 7px;
    font-size: 15px;
    text-align: left;
    display: none;

    &.pshow {
      display: block;
    }
  }
`;

// --------------------error of confrim password styling---------------------------

export const ErrorMacthPasswordDiv = styled.div`
  p {
    color: red;
    margin-bottom: 7px;
    font-size: 15px;
    display: none;
    text-align: left;

    &.mshow {
      display: block;
    }
  }
`;
