import React from "react";
import "./MyCourses.css";

const MyCourses = () => {
  const courses = [
    { title: "Introduction to lorem ipsum", instructor: "Shams Tabrez" },
    { title: "English for today", instructor: "Shams Tabrez" },
    { title: "Basic of lorem ipsum color", instructor: "Shams Tabrez" },
  ];

  return (
    <section className="my-courses">
      <h2>My Courses</h2>
      <div className="course-list">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <h3>{course.title}</h3>
            <p>{course.instructor}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyCourses;
