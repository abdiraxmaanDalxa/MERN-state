import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function Singin() {
  const navigate = useNavigate();
  const form = useForm();
  const api = "http://localhost:3000/api/v1/auth/singin";
  const { register, handleSubmit } = form;

  // Define state variables for error and loading
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true); // Set loading state to true
      await axios.post(api, data);
      navigate("/");
    } catch (error) {
      setError(error.response.data.message); // Set error state with error message
    } finally {
      setLoading(false); // Set loading state back to false after request completes
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sing-in</h1>
      <form onSubmit={handleSubmit(onSubmit)} action="" className="flex flex-col gap-3 ">
        <input
          type="text"
          placeholder="Username"
          id="name"
          className="border-none p-3 rounded-lg bg-transparent"
          {...register("name")}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="border-none p-3 rounded-lg bg-transparent"
          {...register("email")}
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="border-none p-3 rounded-lg bg-transparent"
          {...register("password")}
        />
        {/* Disable button when loading */}
        <button
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
          disabled={loading}
        >
          {loading ? "LOADING..." : "Sign Up"}
        </button>
        {/* Display error message if error state is not null */}
        {error && <p className="text-red-500">{error}</p>}
      </form>
      <div className="flex gap-3 my-4">
        <p>Have an account</p>
        <Link to={"/sing-up"}>
          <span className="text-blue-700">Sign In</span>
        </Link>
      </div>
    </div>
  );
}

export default Singin;
