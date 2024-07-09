import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="h-full w-full  flex flex-col items-center justify-center overflow-hidden p-4">
      <h1 className="text-4xl mb-4 font-extrabold text-black">Sign Up</h1>
      <form
        onSubmit={handleSubmit}
        className="border-2 border-black rounded-lg w-[500px] bg-white max-w-[90vw] shadow-lg"
      >
        <div className="p-4">
          <h1 className="text-2xl font-extrabold text-black px-2">Full Name</h1>
          <input
            type="text"
            value={inputs.fullName}
            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
            placeholder="Enter your full name here"
            className="w-full py-4 px-2 mt-2 mb-4 border-2 border-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <h1 className="text-2xl font-extrabold text-black px-2">Username</h1>
          <input
            type="text"
            value={inputs.username}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            placeholder="Enter your username here"
            className="w-full py-4 px-2 mt-2 mb-4 border-2 border-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <h1 className="text-2xl font-extrabold text-black px-2">Password</h1>
          <input
            type="password"
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            placeholder="Enter your password here"
            className="w-full py-4 px-2 mt-2 mb-4 border-2 border-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <h1 className="text-2xl font-extrabold text-black px-2">
            Confirm Password
          </h1>
          <input
            type="password"
            value={inputs.confirmPassword}
            onChange={(e) =>
              setInputs({ ...inputs, confirmPassword: e.target.value })
            }
            placeholder="Confirm your password"
            className="w-full py-4 px-2 mt-2 mb-4 border-2 border-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />
          <Link
            to={"/login"}
            className="text-sm hover:underline text-red-600 hover:text-green-600 mt-2 inline-block"
            href="#"
          >
            Already have an account?
          </Link>
          <button
            type="submit"
            className="bg-green-500 text-white font-bold py-2 w-full rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Sign Up"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
