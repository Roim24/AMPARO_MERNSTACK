import students from "../data/students.json";
import { useParams, Link } from "react-router-dom";

export default function StudentDetails() { 
    const {id} = useParams();
    const student = students.find((s) => s.id === parseInt(id));

    return(
    <div className="bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-lg font-bold">Student Details</h1>
        <h3 className="text-slate-500">Name: {student.name}</h3>
            <p className="text-slate-500">Age: {student.age}</p>
            <p className="text-slate-500">Birthday: {student.bday}</p>
            <p className="text-slate-500">Student Number: {student.studNum}</p>
            <p className="text-slate-500">Course: {student.course}</p>
            <p className="text-slate-500">Section: {student.section}</p>
        <Link to="/Students" className="text-blue-600 hover:underline">
        Back to Students
        </Link>
    </div>  
    );
}