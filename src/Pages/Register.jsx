import pic from "../assets/others/authentication2.png";
import "../Components/Shared.css";
import bg from "../assets/others/authentication.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import { updateProfile } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import toast from "react-hot-toast";
const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { createUser, setLoading, googleLogin } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const result = await createUser(data.email, data.password);
      console.log(result);
      await updateProfile(auth.currentUser, {
        displayName: data.name,
        photoURL: data.photo,
      });
      reset();
      navigate(location.state ? location.state : "/");
      toast.success("User Created Successfully");
    } catch (err) {
      setLoading(false);
      console.log(err);
      toast.error(err.message);
    }
  };
  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      navigate(from, { replace: true });
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
        className={`flex md:flex-row-reverse flex-col gap-10 bg-url(${bg}) py-8 px-5 md:w-[75%] items-center justify-center`}
      >
        <div className="basis-1/2 hidden md:block">
          <img src={pic} alt="" />
        </div>
        <div className="basis-1/2 flex flex-col items-center justify-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-2xl text-center mb-5 font-medium">Register</h2>
            <label className="font-medium block" htmlFor="name">
              Name
            </label>
            <input
              className="block p-3 my-2 w-[330px]"
              type="name"
              id="name"
              name="name"
              {...register("name", { required: true })}
              placeholder="Enter Your Full Name"
            />
            {errors.name && (
              <p className="text-red-500 mt-2">This field is required</p>
            )}
            <label className="font-medium block" htmlFor="photo">
              Photo URL
            </label>
            <input
              className="block p-3 my-2 w-[330px]"
              type="text"
              id="photo"
              name="photo"
              {...register("photo", { required: true })}
              placeholder="Enter Your Photo URL"
              data-temp-mail-org="0"
            />
            {errors.photo && (
              <p className="text-red-500 mt-2">Photo URL is required</p>
            )}
            <label className="font-medium block" htmlFor="email">
              Email
            </label>
            <input
              className="block p-3 my-2 w-[330px]"
              type="email"
              id="email"
              name="email"
              {...register("email", { required: true })}
              placeholder="Enter Your Email"
            />
            {errors.email && (
              <p className="text-red-500 mt-2">This field is required</p>
            )}
            <label className="font-medium block" htmlFor="password">
              Password
            </label>
            <input
              className="block p-3 my-2 w-[330px]"
              type="password"
              id="password"
              name="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 16,
                pattern: /^(?=.*[a-z])(?=.*[A-Z]).+$/,
              })}
              placeholder="Enter Your Password"
            />
            {errors.password && (
              <p className="text-red-500 mt-2">This field is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500 mt-2">
                Password must be at least 6 character or long
              </p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="text-red-500 mt-2">
                Password must be less or equal to 16 character
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-500 mt-2">
                Password must contain one uppercase and one lowercase letter
              </p>
            )}
            <button
              type="submit"
              className="mt-6 py-3 hover:bg-[#bb9b6b] block transition-all duration-300 bg-[#DBB985] w-[330px] text-white rounded"
            >
              Sign In
            </button>
          </form>
          <p className="text-[#D1A054] my-5">
            Already registered?{" "}
            <span className="font-semibold">
              {" "}
              <Link to={"/login"}>Go to Login</Link>{" "}
            </span>
          </p>
          <p>Or Sign in With</p>
          <div className="flex gap-8 items-center justify-center my-5">
            <FaFacebook
              disabled
              className="disabled:cursor-not-allowed"
              size={25}
            />
            <FaGoogle
              className="cursor-pointer"
              onClick={handleGoogleLogin}
              size={25}
            />
            <FaGithub
              disabled
              className="disabled:cursor-not-allowed"
              size={25}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
