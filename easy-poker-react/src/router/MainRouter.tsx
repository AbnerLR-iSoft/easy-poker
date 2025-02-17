import { useEffect } from "react";
//* STORE
import { UseAuthStore } from "../store/auth";
//* LIBRARIES
import { Routes, Route, Navigate } from "react-router";
//* PAGES
import { LoginSignUp } from "../easy-poker/pages";
//* ROUTES
import { EasyPokerRoutes } from "../easy-poker/routes/EasyPokerRoutes";

const MainRouter = () => {
  const { auth, checkAuthToken } = UseAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, []);

  return (
    <Routes>
      {auth === null ? (
        <>
          <Route path="/auth" element={<LoginSignUp />} />
          <Route path="*" element={<Navigate to="/auth" />} />
        </>
      ) : (
        <>
          <Route path="*" element={<EasyPokerRoutes />} />
        </>
      )}
    </Routes>
  );
};

export default MainRouter;
