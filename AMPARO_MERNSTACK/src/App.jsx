import Studentcard from './components/studentcard';

function App() {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">
          Student Information
        </h1>
        <Studentcard
          name="Geon Amparo"
          age={20}
          bday="2006-06-24"
          studNum="202402149"
          course="Information Technology"
          section="3-7"
        />

        <Studentcard
          name="Geon Amparo"
          age={20}
          bday="2006-06-24"
          studNum="202402149"
          course="Information Technology"
          section="3-7"
        />
      </div>
    </div>
  );
}

export default App;