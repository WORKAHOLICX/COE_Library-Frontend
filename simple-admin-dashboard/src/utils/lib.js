import React from "react";

export const mapYear = (year) => {
  const yearMap = {
    1: "First Year",
    2: "Second Year",
    3: "Third Year",
    4: "Fourth Year",
  };
  return yearMap[year] || "";
};

export const mapSemester = (semester) => {
  const semesterMap = {
    1: "First Semester",
    2: "Second Semester",
  };
  return semesterMap[semester] || "";
};

export const mapProgramme = (programme) => {
  const programmeMap = {
    agricultural: "Agricultural Engineering",
    chemical: "Chemical Engineering",
    civil: "Civil Engineering",
    geomatic: "Geomatic Engineering",
    materials: "Materials Engineering",
    mechanical: "Mechanical Engineering",
    electrical: "Electrical Engineering",
    computer: "Computer Engineering",
    aerospace: "Aerospace Engineering",
    petroleum: "Petroleum Engineering",
    telecom: "Telecom Engineering",
    geological: "Geological Engineering",
    biomedical: "Biomedical Engineering",
    petrochemical: "Petrochemical Engineering",
    metallurgical: "Metallurgical Engineering",
  };
  return programmeMap[programme] || "";
};

export const CourseOptions = React.memo(({ courseOptions, handleChange }) => (
  <ul className="w-full absolute top-12 z-10 mt-2 bg-white border border-gray-300 divide-y divide-gray-200 rounded-md shadow-lg">
    {courseOptions.slice(0, 3).map((course, index) => (
      <li
        key={index}
        onClick={() => handleChange(course)}
        className="px-4 py-2 cursor-pointer hover:bg-gray-100"
      >
        {course}
      </li>
    ))}
  </ul>
));
