import { Link } from "react-router-dom";

const courses = [
  { id: 1, name: "React JS", duration: "3 Months" },
  { id: 2, name: "Python Programming", duration: "2 Months" },
  { id: 3, name: "Artificial Intelligence", duration: "4 Months" }
];

export default function Courses() {
  return (
    <div className="page">
      <h1>Our Courses</h1>

      <div className="course-list">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <h2>{course.name}</h2>
            <p>Duration: {course.duration}</p>
            <Link to={`/courses/${course.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}