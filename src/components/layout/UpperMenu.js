import React from "react";
import { Link } from "react-router-dom";

export default function UpperMenu() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/Resume">Resume</Link> |{" "}
        <Link to="/Portfolio">Portfolio</Link> |{" "}
        <Link to="/Contact_Page">Contact Page</Link> |{" "}
        <Link to="/Admin">Admin</Link> |{" "}
      </nav>
    </header>
  );
}