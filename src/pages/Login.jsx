import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import { loginUser } from "../store/actions/clientActions";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const loginFetchState = useSelector(
    (state) => state.client.loginFetchState
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const success = await dispatch(
      loginUser(data, data.rememberMe)
    );

    if (success) {
      toast.success("Login successful 🎉");

      const redirectTo = location.state?.from || "/";
      history.push(redirectTo);
    } else {
      toast.error("Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen flex">
      
      <div className="hidden md:block w-1/2">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Login"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 p-6">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-2xl font-bold text-center mb-6">
            Welcome Back
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >

            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-md p-2"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-xs">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full border rounded-md p-2"
                {...register("password", {
                  required: "Password is required",
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-xs">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                {...register("rememberMe")}
              />
              <label className="text-sm">Remember Me</label>
            </div>

            <button
              type="submit"
              disabled={loginFetchState === "FETCHING"}
              className="w-full bg-[#23A6F0] text-white py-3 rounded-md font-semibold disabled:opacity-50"
            >
              {loginFetchState === "FETCHING"
                ? "Signing in..."
                : "Sign In"}
            </button>

          </form>

        </div>
      </div>
    </div>
  );
};

export default Login;
