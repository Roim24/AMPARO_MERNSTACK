import students from "../data/students.json";
import StudentCard from "../components/studentcard";
function Student() {
    return(
        <div classmate="bg-white p-6 rounded-xl shadow-lg">
            <h1>Students</h1>
            <div>
                {students.map((student) => (
                    <StudentCard
                    key={student.id}
                    id={student.id}
                    name={student.name}
                    age={student.age}
                    bday={student.bday}
                    studNum={student.studNum}
                    course={student.course}
                    section={student.section}
                    />
                )
            )
                }
            </div>
        </div>
    )
}
export default Student;