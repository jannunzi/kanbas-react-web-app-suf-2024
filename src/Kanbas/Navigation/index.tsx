import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser, FaHelicopter } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
export default function KanbasNavigation() {
  const { pathname } = useLocation();
  const links = [
    { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses", path: "/Kanbas/Dashboard", icon: LiaBookSolid },
    { label: "Calendar", path: "/Kanbas/Calendar", icon: IoCalendarOutline },
    { label: "Inbox", path: "/Kanbas/Inbox", icon: FaInbox },
    { label: "Help", path: "/Kanbas/Help", icon: FaHelicopter },
    { label: "Labs", path: "/Labs", icon: LiaCogSolid },
    { label: "Napster", path: "/Kanbas/Napster", icon: LiaCogSolid },
  ];

  return (
    <div
      id="wd-kanbas-navigation"
      className="rounded-0 list-group position-fixed z-2 bottom-0 top-0 d-none d-md-block bg-black"
      style={{ width: 120 }}
    >
      <a
        className="text-center list-group-item bg-black border-0 text-danger"
        id="wd-neu-link"
        target="_blank"
        href="https://www.northeastern.edu/"
      >
        <img src="/images/NEU.png" alt="neu" className="w-100" />
        Northeastern
      </a>

      <Link
        key="/Kanbas/Account"
        to="/Kanbas/Account"
        className={`list-group-item text-center border-0 bg-black
            ${
              pathname.includes("Account")
                ? "bg-white text-danger"
                : "bg-black text-white"
            }`}
      >
        <FaRegCircleUser
          className={`fs-1 ${
            pathname.includes("Account") ? "text-danger" : "text-white"
          }`}
        />
        <br />
        Account
      </Link>

      {links.map(({ label, path, icon }) => (
        <Link
          key={label}
          className={`list-group-item   border-0 text-center ${
            pathname.includes(label)
              ? "bg-white text-danger"
              : "bg-black text-white"
          }`}
          to={path}
        >
          <>
            {icon({ className: "fs-1 text-danger" })}
            <br />
            {label}
          </>
        </Link>
      ))}
    </div>
  );
}
