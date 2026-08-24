function subject({schedcode, schedname, classsched}) {
    return(
        <div className="subject">
            <p className="text-lg font-bold">Schedule Code: {schedcode}</p>
            <p className="text-lg">Schedule Name: {schedname}</p>
            <p className="text-lg">Class Schedule: {classsched}</p>
        </div>
    )
}
export default subject;