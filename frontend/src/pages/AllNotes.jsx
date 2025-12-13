import React, { useState } from "react";
import Navbar from "../components/Navbar";
import {allCourse,btechCourse,bpharmaCourse,mbaCourse,bbaCourse,bcaCourse,mcaCourse,mtechCourse,} from "../tempDB/NotesData";
import axios from "axios";

const AllNotes = () => {
  const [department, setDepartment] = useState("");
  const [courseName, setCourseName] = useState("");
  const [year, setYear] = useState("");

  // Mapping Courses
  const courseMap = {
    "B.Tech": btechCourse,
    "B.Pharma": bpharmaCourse,
    MBA: mbaCourse,
    BBA: bbaCourse,
    BCA: bcaCourse,
    MCA: mcaCourse,
    "M.Tech": mtechCourse,
  };

  const filterHandler=()=>{
    console.log('search handler')
    const form={department,courseName,year}
    
    

  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-[78px] px-6 md:px-16">

        {/* Filter Box */}
        <div className="bg-white shadow rounded-xl p-6 border">
          <h2 className="text-2xl font-semibold mb-6 text-gray-600">Search Notes</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

            {/* Department Filter */}
            <select
              value={department}
              onChange={(e) => {
                setDepartment(e.target.value);
                setCourseName("");
              }}
              className="border rounded-md px-3 py-2 outline-none focus:border-purple-600 transition"
            >
              <option value="">Select Department</option>
              {allCourse.map((course) => (
                <option value={course} key={course}>
                  {course}
                </option>
              ))}
            </select>

            {/* Course Filter */}
            <select
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              className="border rounded-md px-3 py-2 outline-none focus:border-purple-600 transition"
            >
              <option value="">Select Course</option>
              {department &&
                courseMap[department]?.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
            </select>

            {/* Year Filter */}
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="border rounded-md px-3 py-2 outline-none focus:border-purple-600 transition"
            >
              <option value="">Select Year</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
            </select>

            {/* Apply Button */}
            <button className="bg-purple-600 hover:bg-purple-700 text-white rounded-md px-4 py-2 transition shadow-sm cursor-pointer" onClick={filterHandler}>
              Apply
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AllNotes;
