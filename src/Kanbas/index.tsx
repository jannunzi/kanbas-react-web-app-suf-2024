import { Navigate, Route, Routes } from "react-router";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import "./styles.css";

export default function Kanbas() {
  return (
    <div id="wd-kanbas">
      <div className="d-flex">
        <div className="bg-black d-none d-md-block">
          <KanbasNavigation />
        </div>
        <div className="flex-fill p-4">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="/Account" element={<h2>Account</h2>} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Courses/:id/*" element={<Courses />} />
            <Route path="/Calendar" element={<h2>Calendar</h2>} />
            <Route path="/Inbox" element={<h2>Inbox</h2>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
