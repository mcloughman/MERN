const WorkoutDetails = ({ workout }) => {
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): {workout.load}</strong>
      </p>
      <p>Reps: {workout.reps}</p>
    </div>
  );
};

export default WorkoutDetails;
