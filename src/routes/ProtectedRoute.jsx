/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const Component = props.component;
  const nav = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
      nav("/login");
    } else {
      setLoggedIn(false);
    }
  }, [loggedIn]);

  return (
    <div>
      <Component />
    </div>
  );
};

export default ProtectedRoute;
