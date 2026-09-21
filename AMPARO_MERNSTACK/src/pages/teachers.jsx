
import TeacherCard from "../components/teachercard";  
function Teacher({teacherData}) {
    return(
        <div classmate="bg-white p-6 rounded-xl shadow-lg">
            <h1>Teachers</h1>
            <div>
                {teacherData.map((teacher) => (
                    <TeacherCard
                    key={teacher.id}
                    teacher={teacher}
                    />
                ))}
            </div>
        </div>
    )
}
export default Teacher;
                   