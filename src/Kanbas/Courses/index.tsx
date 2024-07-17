import { FaAlignJustify } from "react-icons/fa";
import { Navigate, Route, Routes } from "react-router";
import Home from "./Home";
import Modules from "./Modules";
import CoursesNavigation from "./Navigation";
// import { courses } from "../Database";
import { useParams, useLocation } from "react-router-dom";

export default function Courses({ courses }: { courses: any[] }) {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const course = courses.find((c) => c._id === cid);
  return (
    <div id="wd-courses">
      <h2 className="text-danger position-fixed bg-white start-0 end-0 ps-md-5 z-1 p-3 top-0">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course?.name} &gt; {pathname.split("/")[4]}
      </h2>
      <CoursesNavigation />
      <div className="ps-md-5 pt-5">
        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Modules" element={<Modules />} />
          <Route path="/Piazza" element={<h1>Piazza</h1>} />
          <Route path="/Zoom" element={<h1>Zoom</h1>} />
          <Route path="/Assignments" element={<h2>Assignments</h2>} />
          <Route path="/Grades" element={<h2>Grades</h2>} />
          <Route path="/Quizzes" element={<h2>Quizzes</h2>} />
        </Routes>
      </div>
    </div>
  );
}
