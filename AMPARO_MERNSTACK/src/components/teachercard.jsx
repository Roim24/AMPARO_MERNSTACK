import {Link} from "react-router-dom";

function teachercard({ teacher }) {
    return(
        <div className="bg-white p-6 rounded-xl shadow-lg">
            <p className="text-lg font-bold">Name: {teacher.name}</p>
            <p className="text-slate-500">Specialization: {teacher.specialization}</p>
            <p className="text-slate-500">Employee Number: {teacher.employeeNum}</p>
            <p className="text-slate-500">Department: {teacher.department}</p>
            <p className="text-slate-500">Sex: {teacher.sex}</p>
            <Link to={`/Teachers/${teacher.id}`} className="text-blue-600 hover:underline">
            View Teacher Details 
            </Link>
        </div>
    )
}
export default teachercard;