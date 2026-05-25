function StudentCard({ student }) {
  return (
    <div className='border rounded-2xl p-4 flex items-center justify-between'>
      <div>
        <h3 className='text-lg font-bold'>{student.name}</h3>
        <p className='text-gray-500'>Goal: {student.goal}</p>
      </div>

      <div className='text-right text-sm'>
        <p>Age: {student.age}</p>
        <p>Weight: {student.weight}kg</p>
        <p>Height: {student.height}cm</p>
      </div>
    </div>
  )
}
export default StudentCard