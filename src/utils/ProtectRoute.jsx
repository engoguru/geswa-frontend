import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifiedUser } from "../reduxStore/slice/userSlice";
import { Navigate, Outlet } from "react-router-dom";

function ProtectRoute({ allowedRoles }) {
  const dispatch = useDispatch();

  let { loginUserData, isloginLoading, authChecked } = useSelector(
    (state) => state.user
  );
// 
  // verifiedUser
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

  //   // role check (SAFE now)
  //   const userRole = loginUserData?.user?.role
  //   const anotherRole=loginUserData?.employee?.role ;
  // // console.log(allowedRoles,userRole,"pp")
  //   if (allowedRoles && !allowedRoles.includes(userRole)) {
  //     return <Navigate to="/not-found" replace />;
  //   }
  const userRole = loginUserData?.user?.role;
  const employeeRole = loginUserData?.user?.employee?.role;



  const hasAccess =
    allowedRoles.includes(userRole) ||
    allowedRoles.includes(employeeRole);
// console.log(hasAccess,"popo")
  if (allowedRoles && !hasAccess) {
    return <Navigate to="/not-found" replace />;
  }

  return <Outlet />;
}

export default ProtectRoute;