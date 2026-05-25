function OverviewCard({ title, value }) {
  return (
    <div className='border rounded-2xl p-5'>
      <h3 className='font-bold mb-2'>{title}</h3>

      <p className='text-3xl font-bold'>{value}</p>
    </div>
  )
}
export default OverviewCard