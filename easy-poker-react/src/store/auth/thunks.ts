//* LIBRARIES
import { useNavigate } from "react-router";
//* STORE
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { onLogin, onLogout, selectAuth, User, Auth } from "./auth.slice";
//* API
import api from "../../api";

export const UseAuthStore = () => {
  const { auth } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  type LoginProps = {
    email: string;
    password: string;
  };

  const startLogin = async ({ email, password }: LoginProps) => {
    try {
      const { data } = await api.post("/login", { email, password });

      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", `${new Date().getTime()}`);

      const userLogin: User = {
        userId: data.user.userId,
        username: data.user.username,
        email: data.user.email,
      };

      const authLogin: Auth = {
        user: userLogin,
        token: data.token,
        status: data.ok,
      };
      dispatch(onLogin(authLogin));
      navigate("/");
    } catch (error) {
      localStorage.clear();
      dispatch(onLogout());
    }
  };

  type SignUpProps = {
    username: string;
    email: string;
    password: string;
  };

  const startSignup = async ({ username, email, password }: SignUpProps) => {
    try {
      const { data } = await api.post("/signup", { username, email, password });

      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", `${new Date().getTime()}`);

      const userLogin: User = {
        userId: data.user.userId,
        username: data.user.username,
        email: data.user.email,
      };

      const authLogin: Auth = {
        user: userLogin,
        token: data.token,
        status: data.ok,
      };
      dispatch(onLogin(authLogin));
      navigate("/");
    } catch (error) {
      localStorage.clear();
      dispatch(onLogout());
    }
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");

    if (!token) return dispatch(onLogout());

    try {
      const { data } = await api.get("/auth");
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", `${new Date().getTime()}`);

      const userLogin: User = {
        userId: data.user.userId,
        username: data.user.username,
        email: data.user.email,
      };

      const authLogin: Auth = {
        user: userLogin,
        token: data.token,
        status: data.ok,
      };

      dispatch(onLogin(authLogin));
    } catch (error) {}
  };

  return {
    startLogin,
    startSignup,
    checkAuthToken,
    auth,
  };
};
