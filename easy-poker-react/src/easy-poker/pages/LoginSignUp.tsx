import { MouseEventHandler, useState } from "react";
//* LIBRARIES
import { useForm } from "react-hook-form";
//* ASSETS
import bgLogin from "../../assets/bg-login.jpg";
import bgSignUp from "../../assets/bg-signup.jpeg";
//* STORE
import { UseAuthStore } from "../../store/auth";

export const LoginSignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const onSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="h-screen flex justify-center items-center overflow-hidden bg-gradient-1">
      <div className="h-[55rem] w-[65rem] flex border-4 rounded-md shadow-2xl bg-white">
        {isSignUp ? (
          <SignUp onSignUp={onSignUp} />
        ) : (
          <Login onSignUp={onSignUp} />
        )}
      </div>
    </div>
  );
};

interface LoginProps {
  onSignUp: MouseEventHandler;
}

const Login = ({ onSignUp }: LoginProps) => {
  const { register, handleSubmit, reset } = useForm();
  const { startLogin } = UseAuthStore();

  const onSubmit = async (data: any) => {
    await startLogin({ email: data.email, password: data.password });
    reset();
  };

  return (
    <>
      <div className="w-[55%] flex flex-col justify-center items-center">
        <img src={bgLogin} alt="Logo" className="h-full object-cover" />
      </div>
      <div className="border h-[100%] w-[45%] flex flex-col gap-8">
        <div className="mt-[8rem] flex flex-col items-center gap-2">
          <h1 className="grenze-gotisch-700 text-[6rem] select-none">Poker</h1>
          <p className="merienda-400 select-none">Please enter your details</p>
        </div>
        <form
          method="post"
          onSubmit={handleSubmit(onSubmit)}
          className="h-auto w-full flex flex-col justify-center items-center gap-4"
        >
          <ul className="p-2 w-full flex flex-col gap-4 items-center">
            <li className="flex flex-col gap-2 w-[80%]">
              <label
                htmlFor="email"
                className="merienda-500 text-[1.3rem] select-none"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                autoComplete="off"
                className="pl-4 py-1 merienda-400 border-[0.2rem] border-black rounded-full focus:border-cyan-900 focus:border-[0.1rem] focus:outline-offset-1 focus:outline-solid focus:outline-[0.2rem] focus:outline-purple-500"
              />
            </li>
            <li className="flex flex-col gap-2 w-[80%]">
              <label
                htmlFor="password"
                className="merienda-500 text-[1.3rem] select-none"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                required
                {...register("password", {
                  required: true,
                })}
                autoComplete="off"
                className="pl-4 py-1 merienda-400 border-[0.2rem] border-black rounded-full focus:border-cyan-900 focus:border-[0.1rem] focus:outline-offset-1 focus:outline-solid focus:outline-[0.2rem] focus:outline-purple-500"
              />
            </li>
          </ul>
          <button
            type="submit"
            className="bg-purple-950 hover:bg-pink-900 w-[12rem] p-4 rounded-md merienda-400 text-white border-2 border-red-900 shadow-2xl hover:inset-shadow-sm shadow-red-500/50 login-btn-bg cursor-pointer"
          >
            Login
          </button>
        </form>
        <div className="mt-[4rem] flex justify-center">
          <h3 className="merienda-500 select-none">
            Don't have and account?{" "}
            <span
              onClick={onSignUp}
              className="merienda-800 text-cyan-700 hover:text-cyan-300 cursor-pointer"
            >
              Sign Up
            </span>
          </h3>
        </div>
      </div>
    </>
  );
};

const SignUp = ({ onSignUp }: LoginProps) => {
  const { register, handleSubmit, reset } = useForm();
  const { startSignup } = UseAuthStore();

  const onSubmit = async (data: any) => {
    await startSignup({
      username: data.username,
      email: data.email,
      password: data.password,
    });
    reset();
  };

  return (
    <>
      <div className="w-[55%] flex flex-col justify-center items-center">
        <img src={bgSignUp} alt="Logo" className="h-full object-cover" />
      </div>
      <div className="border h-[100%] w-[45%] flex flex-col gap-8">
        <div className="mt-[8rem] flex flex-col items-center gap-2">
          <h1 className="grenze-gotisch-700 text-[3.5rem] text-center text-wrap select-none">
            Welcome to Poker
          </h1>
          <p className="merienda-400 select-none">Let's create your account</p>
        </div>
        <form
          method="post"
          onSubmit={handleSubmit(onSubmit)}
          className="h-auto w-full flex flex-col justify-center items-center gap-4"
        >
          <ul className="p-2 w-full flex flex-col gap-4 items-center">
            <li className="flex flex-col gap-2 w-[80%]">
              <label
                htmlFor="username"
                className="merienda-500 text-[1.3rem] select-none"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                required
                {...register("username", {
                  required: true,
                })}
                autoComplete="off"
                className="pl-4 py-1 merienda-400 border-[0.2rem] border-black rounded-full focus:border-cyan-900 focus:border-[0.1rem] focus:outline-offset-1 focus:outline-solid focus:outline-[0.2rem] focus:outline-purple-500"
              />
            </li>
            <li className="flex flex-col gap-2 w-[80%]">
              <label
                htmlFor="email"
                className="merienda-500 text-[1.3rem] select-none"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                autoComplete="off"
                className="pl-4 py-1 merienda-400 border-[0.2rem] border-black rounded-full focus:border-cyan-900 focus:border-[0.1rem] focus:outline-offset-1 focus:outline-solid focus:outline-[0.2rem] focus:outline-purple-500"
              />
            </li>
            <li className="flex flex-col gap-2 w-[80%]">
              <label
                htmlFor="password"
                className="merienda-500 text-[1.3rem] select-none"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                required
                {...register("password", {
                  required: true,
                })}
                minLength={8}
                autoComplete="off"
                className="pl-4 py-1 merienda-400 border-[0.2rem] border-black rounded-full focus:border-cyan-900 focus:border-[0.1rem] focus:outline-offset-1 focus:outline-solid focus:outline-[0.2rem] focus:outline-purple-500"
              />
            </li>
          </ul>
          <button
            type="submit"
            className="bg-purple-950 hover:bg-pink-900 w-[12rem] p-4 rounded-md merienda-400 text-white border-2 border-red-900 shadow-2xl hover:inset-shadow-sm shadow-red-500/50 login-btn-bg cursor-pointer"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-[4rem] flex justify-center">
          <h3 className="merienda-500 select-none">
            Already have an account?{" "}
            <span
              onClick={onSignUp}
              className="merienda-800 text-cyan-700 hover:text-cyan-300 cursor-pointer"
            >
              Log in
            </span>
          </h3>
        </div>
      </div>
    </>
  );
};
