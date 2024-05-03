import { useEffect, useState } from "react";
import Navbar from "./components/NavBar";
import Workoutcard from "./components/Workoutcard";
import Workoutform from "./components/Workoutform";

function App() {
  const [workouts, setworkouts] = useState([]);
  useEffect(() => {
    if (workouts.length === 0) {
      fetchWorkout().then((data) => setworkouts(data));
    }
  }, [workouts]);

  async function fetchWorkout() {
    const response = await fetch("http://localhost:3000/api/workout");
    const data = response.json();
    return data;
  }
  console.log(workouts);
  return (
    <>
      <Navbar />
      <div className="flex m-8 bg-slate-100 min-h-screen">
        {/* <div className="gap-14 m-8 mx-20 flex"> */}
        {/* list of workouts*/}
        <div className="basis-3/4">
          <div className="grid grid-cols-1 gap-4 overflow-y-auto h-full">
            {workouts.map((workout, i) => (
              <Workoutcard key={i} data={workout} />
            ))}
          </div>
        </div>
        {/* form for inputting workout */}
        <div className="basis-1/4">
          <Workoutform />
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default App;
