
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/HomePage";
import Courses from "./pages/CoursesPage";
import CourseDetail from "./pages/CourseDetailPage";

function DeploymentApp() {
  return (
    <div>
      <nav className="navbar">
        <h2>My Learning App</h2>

        <div>
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/courses" element={<Courses />} />

        <Route
          path="/courses/:courseId"
          element={<CourseDetail />}
        />

        <Route
          path="*"
          element={
            <div className="page">
              <h1>404 - Page Not Found</h1>
              <Link to="/">Go to Home</Link>
            </div>
          }
        />
      </Routes>

      <footer>© 2026 My Learning App</footer>
    </div>
  );
}

export default DeploymentApp;
