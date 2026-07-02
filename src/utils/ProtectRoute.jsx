import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifiedUser } from "../reduxStore/slice/userSlice";
import { Navigate, Outlet } from "react-router-dom";

function ProtectRoute({ allowedRoles }) {
  const dispatch = useDispatch();

  const { loginUserData, isloginLoading, authChecked } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (!authChecked) {
      dispatch(verifiedUser());
    }
  }, [authChecked, dispatch]);

  // loading
  if (!authChecked || isloginLoading) {
    return <div>Loading...</div>;
  }

  // not logged in
  if (!loginUserData) {
    return <Navigate to="/sign-in" replace />;
  }

  // role check (SAFE now)
  const userRole = loginUserData?.user?.role;
// console.log(allowedRoles,userRole,"pp")
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/not-found" replace />;
  }

  return <Outlet />;
}

export default ProtectRoute;