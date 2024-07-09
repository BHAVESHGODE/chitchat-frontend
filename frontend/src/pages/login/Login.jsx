import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="h-full w-full  flex flex-col items-center justify-center overflow-hidden p-4">
      <h1 className="text-4xl mb-4 font-extrabold text-black">Login</h1>
      <form
        onSubmit={handleSubmit}
        className="border-2 border-black rounded-lg w-[500px] bg-white max-w-[90vw] shadow-lg"
      >
        <div className="p-4">
          <h1 className="text-2xl font-extrabold text-black px-2">Username</h1>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username here"
            className="w-full py-4 px-2 mt-2 mb-4 border-2 border-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <h1 className="text-2xl font-extrabold text-black px-2">Password</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password here"
            className="w-full py-4 px-2 mt-2 mb-4 border-2 border-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <Link
            to="/signup"
            className="text-sm hover:underline text-green-600 hover:text-green-600 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>
          <button
            type="submit"
            className="bg-green-500 text-white font-bold py-2 w-full rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 mt-4"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Login"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
