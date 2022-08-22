import React from "react";
import { Link } from "react-router-dom";

export default function Admin_Nav() {
  return (
    <header>
      <nav>
        <Link to="/Admin/Add_Resume_Entry">Add Resume Entry</Link> |{" "}
        <Link to="/Admin/Edit_Resume_Entry">Edit Resume Entry</Link> |{" "}
        <Link to="/Admin/Delete_Resume_Entry">Delete Resume Entry</Link> |{" "}
        <Link to="/Admin/Read_Messages">Read Messages</Link> |{" "}
      </nav>
    </header>
  );
}