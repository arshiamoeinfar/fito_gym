function WorkoutCard({ plan }) {
  return (
    <div className='border rounded-2xl p-5'>
      <h3 className='text-xl font-bold mb-4'>{plan.title}</h3>

      <ul className='space-y-3'>
        {plan.exercises.map((exercise, index) => (
          <li
            key={index}
            className='flex justify-between'
          >
            <span>{exercise.title}</span>
            <span>{exercise.sets}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default WorkoutCard