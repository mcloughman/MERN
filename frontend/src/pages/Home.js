import { useEffect } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:4000/api/workouts");
      console.log(response);
      let json = await response.json();
      json = json.workouts;
      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
      // We have to access the workouts array inside the json object. the Ninja doesn't seem to have to do that. He just  uses setWorkouts(workouts). That didn't work for me. I realized the workouts were nested down a level. So I used dot notation to get them. Mission accomplished
    };
    fetchWorkouts();
  }, [dispatch]);
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
