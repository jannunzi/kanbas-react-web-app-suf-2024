import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
export default function KanbasNavigation() {
  return (
    <div id="wd-kanbas-navigation" className="rounded-0 list-group">
      <a
        className="text-center list-group-item bg-black border-0 text-danger"
        id="wd-neu-link"
        target="_blank"
        href="https://www.northeastern.edu/"
      >
        Northeastern
      </a>

      <a
        className="list-group-item bg-black text-white border-0 text-center"
        id="wd-account-link"
        href="#/Kanbas/Account"
      >
        <FaRegCircleUser className="fs-1 text text-white" />
        <br />
        Account
      </a>

      <a
        className="list-group-item bg-white text-danger border-0 text-center"
        id="wd-dashboard-link"
        href="#/Kanbas/Dashboard"
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        Dashboard
      </a>

      <a
        className="list-group-item bg-black text-white border-0 text-center"
        id="wd-course-link"
        href="#/Kanbas/Courses"
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses
      </a>

      <a
        className="list-group-item bg-black text-white border-0 text-center"
        id="wd-calendar-link"
        href="#/Kanbas/Calendar"
      >
        Calendar
      </a>

      <a
        className="list-group-item bg-black text-white border-0 text-center"
        id="wd-inbox-link"
        href="#/Kanbas/Inbox"
      >
        Inbox
      </a>

      <a
        className="list-group-item bg-black text-white border-0 text-center"
        id="wd-labs-link"
        href="#/Labs"
      >
        Labs
      </a>
    </div>
  );
}
