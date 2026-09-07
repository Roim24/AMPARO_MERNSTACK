import students from "../data/students.json";
import { useParams, Link } from "react-router-dom";

export default function StudentDetails() { 
    const {id} = useParams();
    const student = students.find((s) => s.id === parseInt(id));

    return(
    <div>
        <h1>Student Details</h1>
        <h2 className="text-lg font-bold">Name: {student.name}</h2>
            <p className="text-lg">Age: {student.age}</p>
            <p className="text-lg">Birthday: {student.bday}</p>
            <p className="text-lg">Student Number: {student.studNum}</p>
            <p className="text-lg">Course: {student.course}</p>
            <p className="text-lg">Section: {student.section}</p>
        <Link to="/Students" className="text-black-600 hover:underline">
        Back to Students
        </Link>
    </div>  
    );
}