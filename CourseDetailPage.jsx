import { useParams, useNavigate } from "react-router-dom";

const courses = [
  { id: 1, name: "React JS", duration: "3 Months" },
  { id: 2, name: "Python Programming", duration: "2 Months" },
  { id: 3, name: "Artificial Intelligence", duration: "4 Months" }
];

export default function CourseDetail() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const course = courses.find(
    (item) => item.id === Number(courseId)
  );

  if (!course) {
    return <div className="page"><h2>Course Not Found</h2></div>;
  }

  return (
    <div className="page">
      <h1>{course.name}</h1>
      <p>Duration: {course.duration}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}