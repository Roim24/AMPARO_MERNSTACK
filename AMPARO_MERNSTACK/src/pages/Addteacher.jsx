
import  teacherData  from "../data/teacher.json";
import react, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function AddTeacher({teachers, setTeachers}) { 
    
    const navigate = useNavigate();
    const handleSubmit = (e) => {
    e.preventDefault();
    const newTeacher = {
        name: e.target.name.value,
        employeeNum: e.target.employeeNum.value,
        department: e.target.department.value,
        specialization: e.target.specialization.value,
        sex: e.target.sex.value
    }
    setTeachers([...teachers, newTeacher]);
    e.target.reset();
    navigate("/teachers");
}
return(
    <div className="container min-h-screen mx-auto">
        <h1 className="text-3xl font-bold mb-6 justify-content center">Add Teachers</h1>
        <div className="flex justify-center items-center h-full-screen">
            <form className="bg-white p-6 rounded-xl shadow-lg" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
                </div>
                <div className="mb-4">
                    <label htmlFor="employeeNum">Employee Number: </label>
                    <input type="text" id="employeeNum" className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
                </div>
                <div className="mb-4">
                    <label htmlFor="department">Department: </label>
                    <input type="text" id="department" className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
                </div>
                <div className="mb-4">
                    <label htmlFor="specialization">Specialization: </label>
                    <select id="specialization" className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="Appdev">Appdev</option>
                        <option value="Webdev">Webdev</option>
                        <option value="Networking">Networking</option>
                        <option value="Programming">Programming</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="sex">Sex: </label>
                    <select id="sex" className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="mb-4">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add Teacher
                    </button>
                </div>
                
            </form>
        </div>
    </div>
);
}
