import React from 'react';

const data = [
  {
    "courseCode": "CS 1200",
    "title": "Introduction to Computer Science and Software Engineering",
    "description": "Overview of computer science and software engineering concepts.",
    "creditHours": 2
  }
];

const CourseCard = (props) => {
  return (
    <div className="container mx-auto mt-5 p-6 bg-white shadow rounded">
      
      <h1 className="text-3xl font-bold text-blue-600 mb-3">
        {props.CourseCard}
      </h1>

      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        {props.title}
      </h2>

      <p className="text-gray-500 mb-4">
        {props.description}
      </p>

      <div className="inline-black">
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-median">
          2 Credit Hours
        </span>
      </div>
    </div>
  );
};

export default CourseCard;