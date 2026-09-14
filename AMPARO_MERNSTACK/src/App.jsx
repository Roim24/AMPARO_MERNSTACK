
import Students from "./pages/Students";
import Home from "./pages/Home";
import StudentDetails from "./pages/StudentDetails";
import Navbar from "./components/navbar";
import AddStudent from "./pages/AddStudent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return(
    <BrowserRouter> 
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Students" element={<Students />} />
    <Route path="/Students/:id" element={<StudentDetails />} />
    <Route path="/AddStudent" element={<AddStudent />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

//<div>
//<p>Counter: {counter}</p>
//<button className="bg-blue-500 text-white px-4 py-2 rounded" onClick{() => setCounter(counter + 1)}>+</button>
//</div>