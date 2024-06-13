import "./index.css";
import { Link, useParams, useLocation } from "react-router-dom";
export default function CoursesNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
  ];

  return (
    <div id="wd-courses-navigation" className="list-group rounded-0">
      {links.map((link, index) => (
        <Link
          key={link}
          to={`/Kanbas/Courses/${cid}/${link}`}
          className={`list-group-item border-0  ${
            pathname.includes(link) ? "active" : "text-danger"
          }`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
