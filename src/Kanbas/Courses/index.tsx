import { FaAlignJustify } from "react-icons/fa";
import { Navigate, Route, Routes } from "react-router";
import Home from "./Home";
import Modules from "./Modules";
import CoursesNavigation from "./Navigation";
import { courses } from "../Database";
import { useParams, useLocation } from "react-router-dom";

export default function Courses() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const course = courses.find((c) => c._id === cid);
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course?.name} &gt; {pathname.split("/")[4]}
      </h2>
      <div className="d-flex">
        <div className=" d-md-block">
          <CoursesNavigation />
        </div>{" "}
        <div className="flex-fill p-4">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Modules" element={<Modules />} />
            <Route path="/Assignments" element={<h2>Assignments</h2>} />
            <Route path="/Grades" element={<h2>Grades</h2>} />
            <Route path="/Quizzes" element={<h2>Quizzes</h2>} />
          </Routes>
        </div>{" "}
      </div>
    </div>
  );
}
