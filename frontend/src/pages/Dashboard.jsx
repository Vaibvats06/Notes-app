import React, { useState } from 'react';

const Dashboard = () => {
  const [formData, setFormData] = useState({
    course: '',
    branch: '',
    subject: '',
    year: '',
    unit: '',
    file: null,
    description: ''
  });

  // handle text input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // handle file upload
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0]
    });
  };
  function placeholderHandler(){
    console.log("hello")

  }

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate upload (for now)
    console.log('Form Data:', formData);

    alert('Notes uploaded successfully!');
    // You can replace this with an API call to upload data to a backend
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-700 mb-6 text-center">
          Upload Notes
        </h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <select
            className="px-4 pr-5 py-2 text-lg border-2 border-gray-400 text-black outline-none rounded-lg"
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
          >
            <option value="">Select Course</option>
            <option value="B.Tech">B.Tech</option>
            <option value="Pharma">Pharma</option>
            <option value="B.Sc">B.Sc</option>
            <option value="M.Tech">M.Tech</option>
          </select>
          <input
            className="px-4 py-2 text-lg border-2 border-gray-400 text-black placeholder:text-gray-400  outline-none rounded-lg"
            type="text"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            placeholder="Enter Branch Name"
          />
          <input
            className="px-4 py-2 text-lg border-2 border-gray-400 text-black placeholder:text-gray-400 outline-none rounded-lg"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter Subject Name"
          />
          <select
            className="px-4 pr-5 py-2 text-lg border-2 border-gray-400 text-black outline-none rounded-lg"
            type="text"
            name="year"
            value={formData.year}
            onChange={handleChange}
          >
            <option value="">Select Year</option>
            <option value="1">1st</option>
            <option value="2">2nd</option>
            <option value="3">3rd</option>
            <option value="4">4th</option>
          </select>
          <select
            className="px-4 pr-5 py-2 text-lg border-2 border-gray-400 text-black outline-none rounded-lg"
            type="text"
            name="unit"
            value={formData.unit}
            onChange={handleChange}
          >
            <option className='text-gray-400' value="">Select Unit</option>
            <option value="1">1st</option>
            <option value="2">2nd</option>
            <option value="3">3rd</option>
            <option value="4">4th</option>
            <option value="5">5th</option>
          </select>

          {/* Description */}
          <textarea
            className="px-4 py-2 text-lg border-2 border-gray-400 text-black placeholder:text-gray-400 outline-none rounded-lg"
            name="description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter short description about the notes"
          ></textarea>

          {/* File upload */}
          <input
            className="px-4 py-2 text-lg border-2 border-gray-400 text-gray-400 placeholder:text-gray-400 outline-none rounded-lg file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-500 file:text-white hover:file:bg-blue-600 cursor-pointer"
            type="file"
            onChange={handleFileChange}
          />

          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-all duration-200"
          >
            Upload Notes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
