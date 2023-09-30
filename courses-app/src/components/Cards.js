import React, { useState } from "react";
import Card from "./Card";
const Cards = (props) => {
  let couses = props.courses;
  console.log(couses);
  let category = props.category;

  const [likedCourses, setlikedCourses] = useState([]);

  function getCourses() {
    if (category === "All") {
      let allCourses = [];
      Object.values(couses).forEach((array) => {
        array.forEach((cousesData) => {
          allCourses.push(cousesData);
        });
      });
      return allCourses;
    } else {
      return couses[category];
    }
  }
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => {
        return (
          <Card
            key={course.id}
            course={course}
            likedCourses={likedCourses}
            setlikedCourses={setlikedCourses}
          />
        );
      })}
    </div>
  );
};

export default Cards;
