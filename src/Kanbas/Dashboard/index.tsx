export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/reactjs.jpg" />
              <div className="p-3">
                <a
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                  }}
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                >
                  CS1234 React JS
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
                </p>
                <a
                  href="#/Kanbas/Courses/1234/Home"
                  className="btn btn-primary"
                >
                  {" "}
                  Go{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/reactjs.jpg" />
              <div>
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                >
                  CS1234 React JS
                </a>
                <p className="wd-dashboard-course-title">
                  Full Stack software developer
                </p>
                <a href="#/Kanbas/Courses/1234/Home"> Go </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/reactjs.jpg" />
              <div>
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                >
                  CS1234 React JS
                </a>
                <p className="wd-dashboard-course-title">
                  Full Stack software developer
                </p>
                <a href="#/Kanbas/Courses/1234/Home"> Go </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/reactjs.jpg" />
              <div>
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                >
                  CS1234 React JS
                </a>
                <p className="wd-dashboard-course-title">
                  Full Stack software developer
                </p>
                <a href="#/Kanbas/Courses/1234/Home"> Go </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/reactjs.jpg" />
              <div>
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                >
                  CS1234 React JS
                </a>
                <p className="wd-dashboard-course-title">
                  Full Stack software developer
                </p>
                <a href="#/Kanbas/Courses/1234/Home"> Go </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/reactjs.jpg" />
              <div>
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                >
                  CS1234 React JS
                </a>
                <p className="wd-dashboard-course-title">
                  Full Stack software developer
                </p>
                <a href="#/Kanbas/Courses/1234/Home"> Go </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/reactjs.jpg" />
              <div>
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                >
                  CS1234 React JS
                </a>
                <p className="wd-dashboard-course-title">
                  Full Stack software developer
                </p>
                <a href="#/Kanbas/Courses/1234/Home"> Go </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
