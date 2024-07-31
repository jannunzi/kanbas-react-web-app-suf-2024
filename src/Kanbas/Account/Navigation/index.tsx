import { Link, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];

  const { pathname } = useLocation();
  return (
    <div id="wd-account-navigation" className="list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          to={`/Kanbas/Account/${link}`}
          className={`wd-link border border-0 list-group-item
           ${pathname.includes(link) ? "active text-black" : "text-danger"}`}
        >
          {" "}
          {link}{" "}
        </Link>
      ))}
    </div>
  );
}
