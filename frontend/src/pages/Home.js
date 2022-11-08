import { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:4000/api/workouts");
      console.log(response);
      const json = await response.json();
      console.log(json);
      // We have to access the workouts array inside the json object. the Ninja doesn't seem to have to do that. He just  uses setWorkouts(workouts). That didn't work for me. I realized the workouts were nested down a level. So I used dot notation to get them. Mission accomplished
      setWorkouts(json.workouts);
    };
    fetchWorkouts();
  }, []);
  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
