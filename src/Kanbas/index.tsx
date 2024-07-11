import { useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import "./styles.css";
import * as db from "./Database";
import store from "./store";
import { Provider } from "react-redux";

export default function Kanbas() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState<any>({
    _id: "123",
    name: "New Course",
    number: "New Course Number",
    startDate: "2023-01-10",
    endDate: "2023-05-15",
    department: "D123",
    credits: 4,
    description: "This is a dummy course",
  });
  const deleteCourse = (courseId: string) => {
    const newCourses = courses.filter((course) => course._id !== courseId);
    setCourses(newCourses);
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  const addNewCourse = () => {
    const newCourse = {
      ...course,
      name: `${course.name} ${courses.length}`,
      _id: Date.now().toString(),
    };
    setCourses([newCourse, ...courses]);
  };
  return (
    <Provider store={store}>
      <div id="wd-kanbas">
        <KanbasNavigation />
        <div className="ps-md-5 p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="/Account" element={<h2>Account</h2>} />
            <Route
              path="/Dashboard"
              element={
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              }
            />
            <Route
              path="/Courses/:cid/*"
              element={<Courses courses={courses} />}
            />
            <Route path="/Calendar" element={<h2>Calendar</h2>} />
            <Route path="/Inbox" element={<h2>Inbox</h2>} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
