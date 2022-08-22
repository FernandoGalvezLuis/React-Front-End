import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import UpperMenu from "./UpperMenu";
//import Footer from "./Footer";
import HOME from "../pages/Home";
import RESUME from "../pages/Resume";
import PORTFOLIO from "../pages/Portfolio";
import CONTACT_PAGE from "../pages/Contact_Page";
import ADMIN from "../pages/Admin";


import ADD_RESUME_ENTRY from "../pages/Admin_Pages/Add_Resume_Entry";
import EDIT_RESUME_ENTRY from "../pages/Admin_Pages/Edit_Resume_Entry";
import DELETE_RESUME_ENTRY from "../pages/Admin_Pages/Delete_Resume_Entry";
import READ_MESSAGES from "../pages/Admin_Pages/Read_Messages";





export default function MainBody() {
  return (
    <div>
      <BrowserRouter>
        <UpperMenu />
        <main>
          <Routes>
            <Route path="/" element={<HOME />} />
            <Route path="/Resume" element={<RESUME />} />
            <Route path="/Portfolio" element={<PORTFOLIO />} />
            <Route path="/Contact_Page" element={<CONTACT_PAGE />} />
            <Route path="/Admin" element={<ADMIN />} />
          
            <Route path="/Admin/Add_Resume_Entry" element={<ADD_RESUME_ENTRY />} />
            <Route path="/Admin/Edit_Resume_Entry" element={<EDIT_RESUME_ENTRY />} />
            <Route path="/Admin/Delete_Resume_Entry" element={<DELETE_RESUME_ENTRY />} />
            <Route path="/Admin/Read_Messages" element={<READ_MESSAGES />} />

            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
            
          </Routes>
        </main>
        
      </BrowserRouter>
    </div>
  );
}