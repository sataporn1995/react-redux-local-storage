import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Main() {
  const auth = useSelector((state) => state.auth);

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      <div className="text-center">
        <h1>USERNAME: {auth.username}</h1>
        <h1>
          <Link to="/">LOGOUT</Link>
        </h1>
      </div>
    </div>
  );
}
