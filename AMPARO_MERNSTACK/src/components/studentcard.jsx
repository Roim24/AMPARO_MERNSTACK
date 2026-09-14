import {Link} from "react-router-dom";

function studentcard({ id, name, age, bday, studNum, course, section}) {
    return(
        <div className="bg-white p-6 rounded-xl shadow-lg">
            <p className="text-lg font-bold">Name: {name}</p>
            <p className="text-slate-500">Age: {age}</p>
            <p className="text-slate-500">Birthday: {bday}</p>
            <p className="text-slate-500">Student Number: {studNum}</p>
            <p className="text-slate-500">Course: {course}</p>
            <p className="text-slate-500">Section: {section}</p>

            <Link to={`/Students/${id}`} className="text-blue-600 hover:underline">
            View Student Details 
            </Link>
        </div>
    )
}
export default studentcard;