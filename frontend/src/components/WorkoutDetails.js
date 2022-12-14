import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { FaTrash } from "react-icons/fa";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();

  const handleClick = async () => {
    const response = await fetch(
      `http://localhost:4000/api/workouts/${workout._id}`,
      {
        method: "DELETE",
      }
    );
    console.log(response.body);
    const data = await response.json(); // should give us the deleted workout
    const json = data.workout;

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): {workout.load}</strong>
      </p>
      <p>Reps: {workout.reps}</p>
      <p>
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
      <span onClick={handleClick}>
        <FaTrash className="trash" />
      </span>
    </div>
  );
};

export default WorkoutDetails;
