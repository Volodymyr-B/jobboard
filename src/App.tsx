import React from "react";
import { Route, Routes } from "react-router-dom";

import JobList from "./pages/JobList";
import JobDeteiled from "./pages/JobDeteiled";
import NotFound from "./pages/NotFound";

import ScrollToTop from "./helpers/ScrollToTop";

function App() {
  return (
    <div className="overflow-hidden">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/:id" element={<JobDeteiled />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
