import { useState } from "react"

export default function CoachDashboard() {

  const [students] = useState([
    {
      id: 1,
      name: "Ali Moradi",
      goal: "Fat Loss",
    },
    {
      id: 2,
      name: "Sara Ahmadi",
      goal: "Muscle Gain",
    },
    {
      id: 3,
      name: "Amir Hosseini",
      goal: "Strength",
    },
  ])

  const [planName, setPlanName] = useState("")
  const [plans, setPlans] = useState([])

  const createPlanHandler = () => {
    if (!planName) return

    const newPlan = {
      id: Date.now(),
      title: planName,
    }

    setPlans([...plans, newPlan])

    setPlanName("")
  }

  return (
    <div className="min-h-screen bg-blue-50 p-8">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-blue-700 mb-2">
          Coach Dashboard 🏋️
        </h1>

        <p className="text-gray-600">
          Manage athletes and workout plans
        </p>
      </div>

      {/* Overview */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white p-6 rounded-3xl shadow-md border border-blue-100">
          <h2 className="text-gray-500 mb-2">
            Athletes
          </h2>

          <p className="text-4xl font-bold text-blue-700">
            {students.length}
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-md border border-blue-100">
          <h2 className="text-gray-500 mb-2">
            Workout Plans
          </h2>

          <p className="text-4xl font-bold text-blue-700">
            {plans.length}
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-md border border-blue-100">
          <h2 className="text-gray-500 mb-2">
            Active Athletes
          </h2>

          <p className="text-4xl font-bold text-blue-700">
            12
          </p>
        </div>

      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-2 gap-8">

        {/* Students */}
        <div className="bg-white rounded-3xl shadow-md border border-blue-100 p-6">

          <h2 className="text-2xl font-bold text-blue-700 mb-6">
            Students List
          </h2>

          <div className="space-y-4">

            {students.map((student) => (
              <div
                key={student.id}
                className="border border-blue-100 rounded-2xl p-4 flex items-center justify-between"
              >

                <div>
                  <h3 className="font-bold text-lg">
                    {student.name}
                  </h3>

                  <p className="text-gray-500">
                    Goal: {student.goal}
                  </p>
                </div>

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl">
                  View
                </button>

              </div>
            ))}

          </div>

        </div>

        {/* Create Plan */}
        <div className="bg-white rounded-3xl shadow-md border border-blue-100 p-6">

          <h2 className="text-2xl font-bold text-blue-700 mb-6">
            Create Workout Plan
          </h2>

          <input
            value={planName}
            onChange={(e) => setPlanName(e.target.value)}
            placeholder="Workout plan name..."
            className="w-full border border-blue-200 rounded-2xl p-3 mb-4 focus:outline-none focus:border-blue-500"
          />

          <button
            onClick={createPlanHandler}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-2xl transition"
          >
            Create Plan
          </button>

          {/* Plans */}
          <div className="mt-8">

            <h3 className="font-bold text-lg mb-4">
              Created Plans
            </h3>

            <div className="space-y-3">

              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className="border border-blue-100 rounded-2xl p-4 flex items-center justify-between"
                >

                  <p className="font-medium">
                    {plan.title}
                  </p>

                  <span className="text-sm text-blue-600">
                    Active
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}