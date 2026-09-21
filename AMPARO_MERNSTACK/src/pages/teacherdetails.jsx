import teacherData from "../data/teacher.json";
import { useParams, Link } from "react-router-dom";

export default function TeacherDetails() { 
    const {id} = useParams();
    const teacher = teacherData.find((t) => t.id === parseInt(id));

    return(
    <div className="bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-lg font-bold">Teacher Details</h1>
        <h3 className="text-slate-500">Name: {teacher.name}</h3>
            <p className="text-slate-500">Specialization: {teacher.specialization}</p>
            <p className="text-slate-500">Employee Number: {teacher.employeeNum}</p>
            <p className="text-slate-500">Department: {teacher.department}</p>
            <p className="text-slate-500">Sex: {teacher.sex}</p>
        <Link to="/teachers" className="text-blue-600 hover:underline">
        Back to Teachers
        </Link>
    </div>  
    );
}
