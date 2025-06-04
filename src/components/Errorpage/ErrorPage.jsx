import React from "react";
import { NavLink } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <div className="errorPage page-section d-flex align-items-center justify-content-center">
        <div className="text-center">
          <h1 className="display-1 fw-bold text-danger">404</h1>
          <h2 className="mb-3 text-dark">Oops! Page Not Found</h2>
          <p className="text-muted mb-4">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <NavLink to="/" className="btn btn-primary px-4 py-2">
            Go Back Home
          </NavLink>
        </div>
      </div>
    </>
  );
}
