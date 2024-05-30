import "./index.css";
export default function CoursesNavigation() {
  return (
    <div id="wd-courses-navigation" className="list-group rounded-0">
      <a
        className="list-group-item border-0 active"
        id="wd-course-home-link"
        href="#/Kanbas/Courses/1234/Home"
      >
        Home
      </a>

      <a
        id="wd-course-modules-link"
        className="list-group-item border-0 text-danger"
        href="#/Kanbas/Courses/1234/Modules"
      >
        Modules
      </a>

      <a
        className="list-group-item border-0 text-danger"
        id="wd-course-piazza-link"
        href="#/Kanbas/Courses/1234/Piazza"
      >
        Piazza
      </a>

      <a
        className="list-group-item border-0 text-danger"
        id="wd-course-zoom-link"
        href="#/Kanbas/Courses/1234/Zoom"
      >
        Zoom
      </a>

      <a
        className="list-group-item border-0 text-danger"
        id="wd-course-quizzes-link"
        href="#/Kanbas/Courses/1234/Assignments"
      >
        Assignments
      </a>

      <a
        className="list-group-item border-0 text-danger"
        id="wd-course-assignments-link"
        href="#/Kanbas/Courses/1234/Quizzes"
      >
        Quizzes
      </a>

      <a
        className="list-group-item border-0 text-danger"
        id="wd-course-grades-link"
        href="#/Kanbas/Courses/1234/Grades"
      >
        Grades
      </a>
    </div>
  );
}
