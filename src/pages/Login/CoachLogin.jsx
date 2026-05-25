import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function CoachLogin() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: "",
    email: "",
    experience: "",
    password: "",
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.password) return

    localStorage.setItem("role", "coach")
    localStorage.setItem("user", JSON.stringify(form))

    navigate("/dashboard")

    console.log(localStorage.getItem("role"))
  }

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center">

      <div className="bg-white w-96 p-8 rounded-3xl shadow-lg">

        <h1 className="text-2xl font-bold text-blue-700 mb-6">
          Coach Registration 🏋️
        </h1>

        <input
          name="name"
          placeholder="Full Name"
          className="w-full border p-3 rounded-xl mb-3"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          className="w-full border p-3 rounded-xl mb-3"
          onChange={handleChange}
        />

        <input
          name="experience"
          placeholder="Experience (years)"
          className="w-full border p-3 rounded-xl mb-3"
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-xl mb-6"
          onChange={handleChange}
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white p-3 rounded-xl"
        >
          Continue
        </button>

      </div>
    </div>
  )
}