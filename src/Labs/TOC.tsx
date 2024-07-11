import { useLocation } from "react-router";

export default function TOC() {
  const { pathname } = useLocation();
  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <a className="nav-link" id="wd-a" href="#/Labs">
          Labs
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`}
          id="wd-a1"
          href="#/Labs/Lab1"
        >
          Lab 1
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`}
          id="wd-a2"
          href="#/Labs/Lab2"
        >
          Lab 2
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`}
          id="wd-a3"
          href="#/Labs/Lab3"
        >
          Lab 3
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link ${pathname.includes("Lab4") ? "active" : ""}`}
          id="wd-a3"
          href="#/Labs/Lab4"
        >
          Lab 4
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" id="wd-a3" href="#/Kanbas">
          Kanbas
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          id="wd-github"
          href="https://github.com/jannunzi/kanbas-react-web-app-suf-2024"
        >
          GitHub
        </a>
      </li>
    </ul>
  );
}
