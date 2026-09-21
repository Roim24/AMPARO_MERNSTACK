
import Students from "./pages/Students";
import Home from "./pages/Home";
import StudentDetails from "./pages/StudentDetails";
import Navbar from "./components/navbar";
import AddStudent from "./pages/AddStudent";
import Addteacher from "./pages/Addteacher";
import Teachers from "./pages/teachers";
import teacherData from "./data/teacher.json";
import TeacherDetails from "./pages/teacherdetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [teachers, setTeachers] = useState(teacherData);
  return(
    <BrowserRouter> 
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Students" element={<Students />} />
    <Route path="/Students/:id" element={<StudentDetails />} />
    <Route path="/teachers" element={<Teachers teacherData={teachers} />} />
    <Route path="/teachers/:id" element={<TeacherDetails />} />
    <Route path="/AddStudent" element={<AddStudent />} />
    <Route path="/Addteacher" element={<Addteacher teachers={teachers} setTeachers={setTeachers} />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

//<div>
//<p>Counter: {counter}</p>
//<button className="bg-blue-500 text-white px-4 py-2 rounded" onClick{() => setCounter(counter + 1)}>+</button>
//</div>