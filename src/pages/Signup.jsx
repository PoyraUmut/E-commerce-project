import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../api/axios";

const Signup = () => {
  const history = useHistory();
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      role_id: 3, 
    },
  });

  const selectedRole = watch("role_id");

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await api.get("/roles");
        setRoles(response.data);
      } catch (error) {
        toast.error("Failed to load roles.");
      }
    };

    fetchRoles();
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      let payload;

      if (Number(data.role_id) === 2) {
        payload = {
          name: data.name,
          email: data.email,
          password: data.password,
          role_id: Number(data.role_id),
          store: {
            name: data.store_name,
            phone: data.store_phone,
            tax_no: data.store_tax_no,
            bank_account: data.store_bank_account,
          },
        };
      } else {
        payload = {
          name: data.name,
          email: data.email,
          password: data.password,
          role_id: Number(data.role_id),
        };
      }

      await api.post("/signup", payload);

      toast.warn(
        "You need to click link in email to activate your account!"
      );

      history.goBack();
    } catch (error) {
      const message = error.response?.data?.message;

      if (message?.toLowerCase().includes("exist")) {
        toast.error("This email is already registered.");
      } else if (error.response?.status === 500) {
        toast.error("User already exists or server error.");
      } else {
        toast.error("Signup failed. Please check your information.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      
      <div className="hidden md:block w-1/2">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Signup"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 p-6">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-2xl font-bold text-center mb-6">
            Create Account
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-md p-2"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Minimum 3 characters",
                  },
                })}
              />
              {errors.name && (
                <p className="text-red-500 text-xs">
                  {errors.name.message}
                </p>
              )}
            </div>

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
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                    message:
                      "Password must be 8+ characters with at least one uppercase letter, one lowercase letter, one number, and one special character.",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-xs">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full border rounded-md p-2"
                {...register("confirmPassword", {
                  validate: (value) =>
                    value === watch("password") ||
                    "Passwords do not match",
                })}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <select
              className="w-full border rounded-md p-2"
              {...register("role_id")}
            >
              {roles.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.name}
                </option>
              ))}
            </select>

            {Number(selectedRole) === 2 && (
              <div className="space-y-3 border-t pt-4">

                <div>
                  <input
                    type="text"
                    placeholder="Store Name"
                    className="w-full border rounded-md p-2"
                    {...register("store_name", {
                      required: "Store name required",
                      minLength: {
                        value: 3,
                        message: "Minimum 3 characters",
                      },
                    })}
                  />
                  {errors.store_name && (
                    <p className="text-red-500 text-xs">
                      {errors.store_name.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Store Phone (TR)"
                    className="w-full border rounded-md p-2"
                    {...register("store_phone", {
                      required: "Phone required",
                      pattern: {
                        value: /^(\+90|0)?5\d{9}$/,
                        message: "Invalid TR phone",
                      },
                    })}
                  />
                  {errors.store_phone && (
                    <p className="text-red-500 text-xs">
                      {errors.store_phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Tax ID (TXXXXVXXXXXX)"
                    className="w-full border rounded-md p-2"
                    {...register("store_tax_no", {
                      required: "Tax no required",
                      pattern: {
                        value: /^T\d{4}V\d{6}$/,
                        message: "Format must be TXXXXVXXXXXX",
                      },
                    })}
                  />
                  {errors.store_tax_no && (
                    <p className="text-red-500 text-xs">
                      {errors.store_tax_no.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="IBAN (TR)"
                    className="w-full border rounded-md p-2"
                    {...register("store_bank_account", {
                      required: "IBAN required",
                      pattern: {
                        value: /^TR\d{24}$/,
                        message: "Invalid TR IBAN",
                      },
                    })}
                  />
                  {errors.store_bank_account && (
                    <p className="text-red-500 text-xs">
                      {errors.store_bank_account.message}
                    </p>
                  )}
                </div>

              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#23A6F0] text-white py-3 rounded-md font-semibold disabled:opacity-50"
            >
              {loading ? "Creating..." : "Create Account"}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
