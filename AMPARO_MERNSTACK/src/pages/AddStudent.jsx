

import React, { useState } from "react";
export default function AddStudent() { 
    const [information, setinformation] = useState([]);
   const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
        name: e.target.name.value,
        studNum: e.target.studNum.value,
        course: e.target.course.value,
        courseDesc: e.target.courseDesc.value,
        yearLevel: e.target.yearLevel.value,
        sex: e.target.sex.value
    }
    setinformation([...information, newStudent]);
    e.target.reset();
}
    return(
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold mb-6 justify-content center">Add Students</h1>
            <div className="flex justify-center items-center h-screen">
                

                <form className="bg-white p-6 rounded-xl shadow-lg" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name">Name: </label>
                        <input type="text" id="name" className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="studNum">Student Number: </label>
                        <input type="text" id="studNum" className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="course">Course: </label>
                        <input type="text" id="course" className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="courseDesc">Course Description: </label>
                        <input type="text" id="courseDesc" className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
                    </div>
                   <div className="mb-4">
                        <label htmlFor="yearLevel">Year Level: </label>
                        <input type="text" id="yearLevel" className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="sex">Sex: </label>
                        <select id="sex" className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">Select Sex</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                         </select>
                    </div>
                    <div className="mb-4">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Add Student
                        </button>
                    </div>
                    {information.map((student, index) => (
                        <div key={index} className="bg-gray-100 p-4 rounded-md mb-4">
                            <p><strong>Name:</strong> {student.name}</p>
                            <p><strong>Student Number:</strong> {student.studNum}</p>
                            <p><strong>Course:</strong> {student.course}</p>
                            <p><strong>Course Description:</strong> {student.courseDesc}</p>
                            <p><strong>Year Level:</strong> {student.yearLevel}</p>
                            <p><strong>Sex:</strong> {student.sex}</p>
                        </div>
                    ))}
                </form>
            </div>
        </div>
    );
    }
