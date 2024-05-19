import pic from "../assets/others/authentication2.png";
import "../Components/Shared.css";
import bg from "../assets/others/authentication.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const [btnDisable, setBtnDisable] = useState(true);
  const [givenText, setGivenText] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn, setLoading } = useAuth();
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  useEffect(() => {
    if (validateCaptcha(givenText) == true) {
      setBtnDisable(false);
    } else {
      setBtnDisable(true);
    }
  }, [givenText]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      await signIn(data.email, data.password);
      navigate(location.state ? location.state : "/");
      reset();
      toast.success("Logged in Successful");
    } catch (err) {
      setLoading(false);
      toast.error(err.message);
    }
  };
  return (
    <div className="login-bg flex flex-col font-poppins items-center justify-center">
      <div
        style={{ boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)" }}
        className={`flex md:flex-row flex-col gap-10 bg-url(${bg}) py-8 px-5 md:w-[75%] items-center justify-center`}
      >
        <div className="basis-1/2 hidden md:block">
          <img src={pic} alt="" />
        </div>
        <div className="basis-1/2 flex flex-col items-center justify-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-2xl text-center mb-5 font-medium">Login</h2>
            <label className="font-medium" htmlFor="email">
              Email
            </label>
            <input
              className="block p-3 my-2 w-[330px]"
              type="email"
              name="email"
              id="email"
              {...register("email")}
              required
              placeholder="Enter Your Email"
            />
            <label className="font-medium" htmlFor="password">
              Password
            </label>
            <input
              className="block p-3 mt-2 mb-5 w-[330px]"
              type="password"
              id="password"
              {...register("password")}
              name="password"
              required
              placeholder="Enter Your Password"
            />
            {/* <input className="block p-3 mt-5 w-[330px]" type="text" /> */}
            <p className="font-medium mb-2">Captcha</p>
            <LoadCanvasTemplate />
            <input
              onBlur={(e) => setGivenText(e.target.value)}
              className="block p-3 mt-5 w-[330px]"
              type="text"
              name="captcha"
              placeholder="Type the captcha above"
            />
            <button
              disabled={btnDisable}
              type="submit"
              className={`disabled:cursor-not-allowed ${
                btnDisable
                  ? "bg-slate-300 text-slate-400"
                  : "hover:bg-[#bb9b6b] transition-all duration-300 bg-[#DBB985]"
              } mt-6 py-3 cursor-pointer w-[330px] text-white rounded`}
            >
              Sign In
            </button>
          </form>
          <p className="text-[#D1A054] my-5">
            New Here?{" "}
            <span className="font-semibold">
              {" "}
              <Link to={"/register"}>Create a new Account</Link>{" "}
            </span>
          </p>
          <p>Or Sign in With</p>
          <div className="flex gap-8 items-center justify-center my-5">
            <FaFacebook size={25} />
            <FaGoogle size={25} />
            <FaGithub size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
