import {Link} from "react-router-dom";

function studentcard({ id, name, age, bday, studNum, course, section}) {
    return(
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <p className="text-lg font-bold">Name: {name}</p>
            <p className="text-lg">Age: {age}</p>
            <p className="text-lg">Birthday: {bday}</p>
            <p className="text-lg">Student Number: {studNum}</p>
            <p className="text-lg">Course: {course}</p>
            <p className="text-lg">Section: {section}</p>

            <Link to={`/Students/${id}`} className="text-pink-600 hover:underline">
            View Student Details 
            </Link>
        </div>
    )
}
export default studentcard;