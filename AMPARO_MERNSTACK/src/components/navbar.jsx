import {Link} from "react-router-dom";

export default function navbar() {
    return(
        
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto">
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="hover:text-gray-300">
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/students" className="hover:text-gray-300">
                        Students List
                        </Link>
                    </li>
                    <li>
                        <Link to="/teachers" className="hover:text-gray-300">
                        Teachers List
                        </Link>
                    </li>
                    <li>
                        <Link to="/AddStudent" className="hover:text-gray-300">
                        Add Student
                        </Link>
                    </li>
                    <li>
                        <Link to="/Addteacher" className="hover:text-gray-300">
                        Add Teacher
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
       
    )
}