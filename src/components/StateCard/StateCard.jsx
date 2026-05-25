function StatCard({ title, value, icon }) {
  return (
    <div className='bg-white rounded-3xl shadow-md p-6'>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-lg font-semibold'>{title}</h2>
        {icon}
      </div>

      <p className='text-4xl font-bold'>{value}</p>
    </div>
  )
}

export default StatCard