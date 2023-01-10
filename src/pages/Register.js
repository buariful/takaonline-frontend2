import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import PhoneInput from "react-phone-number-input";
import { Link, useNavigate } from "react-router-dom";
import "../assets/style/register.css";
import Loading from "../components/shared/Loading";
import auth from "../firebase.init";

const Register = () => {
  const [mblNumber, setMblNumber] = useState();
  const [registerError, setRegisterError] = useState();
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, fireUser, fireLoading, fireError] =
    useCreateUserWithEmailAndPassword(auth);

  // ======== register form action =========
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target.password.value !== e.target.confirmPassword.value) {
      setRegisterError(
        'Please enter same password in "PASSWORD" and "CONFIRM PASSWORD field'
      );
      return;
    }
    if (e.target.password.value.length < 8) {
      setRegisterError("Please inter 8 or more digits password");
      return;
    }

    await createUserWithEmailAndPassword(
      e.target.email.value,
      e.target.password.value
    );
  };

  // ============ firebase actions ==========
  if (fireUser) {
    navigate("/home");
  }
  if (fireLoading) {
    return <Loading></Loading>;
  }

  if (fireError) {
    return (
      <div className="min-h-screen flex justify-center items-center ">
        <h2 className="text-2xl font-bold text-red-500">
          {" "}
          <span> {fireError.message}</span>
        </h2>
        <Link
          to="/home"
          className="font-bold mt-5 ml-3 bg-red-500 text-white py-3 px-3 rounded-md hover:bg-gray-800"
        >
          Home
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl font-bold my-6">Please Register!</h1>

        {/* register error messege */}
        <p className="font-bold text-red-700">{registerError}</p>

        <div className="w-1/2 mx-auto bg-red-200 py-5 rounded-lg mb-8">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your full name"
              className="w-10/12 py-3 px-2 rounded-md mb-4"
              required
            />
            <PhoneInput
              international
              countryCallingCodeEditable={false}
              defaultCountry="BD"
              value={mblNumber}
              onChange={setMblNumber}
              placeholder="Enter your full name"
              className="w-10/12 mx-auto py-3 px-2 rounded-md mb-4"
              name="mobile"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-10/12 py-3 px-2 rounded-md mb-4"
              required
            />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Enter a password"
              className="w-10/12 py-3 px-2 rounded-md mb-4"
              required
            />{" "}
            <br />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              className="w-10/12 py-3 px-2 rounded-md mb-4"
            />{" "}
            <br />
            <input
              type="submit"
              value="Signup"
              className="py-3 w-1/2 bg-orange-600 text-white cursor-pointer rounded-lg"
              required
            />
          </form>
        </div>
        <p className="my-3">
          Already have an account ? Then{" "}
          <Link to="/login" className="font-bold text-cyan-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
