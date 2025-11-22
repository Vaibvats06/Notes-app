import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const UploadNotes = () => {
  const navigate = useNavigate();
  const [chapterName, setChapterName] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [courseName, setCourseName] = React.useState("");
  const [department, setDepartment] = React.useState("B.Tech");
  const [year, setYear] = React.useState();
  const [semester, setSemester] = React.useState();
  const [file, setFile] = React.useState(null);
  const formData = new FormData();

  //upload handler function
  const uploadHandler = async () => {
    //form data to send to backend
    formData.append("chapterName", chapterName);
    formData.append("subject", subject);
    formData.append("courseName", courseName);
    formData.append("department", department);
    formData.append("year", year);
    formData.append("semester", semester);
    formData.append("file", file);
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/api/notes/upload-notes`,
      formData,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (response.status === 201 || response.data.message==="Notes uploaded successfully") {
      toast.success("Notes uploaded successfully");
      setChapterName("");
      setSubject("");
      setCourseName("");
      setDepartment("B.Tech");
      setYear("");
      setSemester("");
      setFile(null);
      
    }
  };

  return (
    // Body of the upload notes
    <div className="w-screen h-screen bg-[#f6f6f8] text-black items-center flex">
      <div className="mx-50 w-full">
        {/* Heading and description */}
        <h1 className="text-2xl font-bold mb-2 text-gray-900">
          Add New Notes{" "}
        </h1>
        <p className="text-gray-500 mb-7">
          Fill in the details below to add new notes and get rewards.
        </p>
        {/* Form for uploading notes */}
        <form
          className="w-full px-5 py-7 bg-white shadow-2xl rounded-t-xl border-t border-l border-r border-gray-300"
          encType="multipart/form-data"
          action=""
        >
          <h1 className="text-xl font-semibold mb-4">Notes Details</h1>
          {/* Input fields for Chapter name */}
          <div className="mb-4">
            <label htmlFor="chapterName" className="block mb-1">
              Chapter Name
            </label>
            <input
              type="text"
              name="chapterName"
              id="chapterName"
              value={chapterName}
              onChange={(e) => setChapterName(e.target.value)}
              placeholder="e.g., introduction to algebra"
              className="outline-none border w-full px-2 py-1 rounded focus:border-orange-600"
            />
          </div>
          {/* Input fields for subject & course name */}
          <div className="mb-4 grid grid-cols-2 gap-6">
            <div className="">
              <label htmlFor="subject" className=" mb-1">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="e.g., Mathematics ,Physics"
                className="outline-none border w-full px-2 py-1 rounded focus:border-orange-600"
              />
            </div>
            <div>
              <label htmlFor="courseName" className=" mb-1">
                Course Name
              </label>
              <input
                type="text"
                name="courseName"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                id="courseName"
                placeholder="e.g., Computer Science ,Electronics, etc"
                className="outline-none border w-full px-2 py-1 rounded focus:border-orange-600"
              />
            </div>
          </div>
          {/* Dropdowns for department, semester & year */}
          <div className="mb-4 grid grid-cols-2 gap-6">
            <div className="">
              <label htmlFor="department" className=" mb-1 block">
                Department
              </label>
              <select
                name="department"
                id="department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="outline-none border w-full px-2 py-1 rounded "
              >
                <option value="B.Tech">B.Tech</option>
                <option value="B.Pharma">B.Pharma</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="">
                <label htmlFor="year" className=" mb-1 block">
                  Year
                </label>
                <select
                  name="year"
                  id="year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="outline-none border w-full px-2 py-1 rounded mr-2 overflow-auto select-left "
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <div className="">
                <label htmlFor="semester" className=" mb-1 block">
                  Semester
                </label>
                <select
                  name="semester"
                  id="semester"
                  value={semester}
                  onChange={(e) => setSemester(e.target.value)}
                  className="outline-none border w-full px-2 py-1 rounded "
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </select>
              </div>
            </div>
          </div>
          {/* File upload  */}
          <div className="mb-4">
            <label htmlFor="file" className="block mb-1">
              Upload Notes File
            </label>
            <input
              type="file"
              name="file"
              id="file"
              placeholder="upload file here"
              className="outline-none border w-full px-2 py-1 rounded focus:border-orange-600"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
        </form>
        <div className="w-full px-5 py-7 bg-gray-100 shadow-2xl rounded-b-xl border justify-end border-gray-200 flex gap-6">
          <button
            className="bg-gray-300 text-black font-semibold px-4 py-2 rounded hover:bg-gray-400 cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            Cancel
          </button>
          <button
            className="bg-[#2b6cee] font-semibold text-white px-4 py-2 rounded hover:bg-[#185ce6] cursor-pointer"
            onClick={uploadHandler}
          >
            Save Notes
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadNotes;
