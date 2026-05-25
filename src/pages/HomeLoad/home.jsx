import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Home() {
  const navigate = useNavigate()
  const [animating, setAnimating] = useState(false)

  const goToLogin = (role) => {
    setAnimating(true)

    setTimeout(() => {
      navigate(`/login/${role}`)
    }, 300)
  }

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center page">

      <div className={`grid md:grid-cols-2 gap-8 transition-all duration-300 ${animating ? "opacity-0 scale-95" : ""}`}>

        <button
          onClick={() => goToLogin("coach")}
          className="bg-white p-10 rounded-3xl shadow hover:scale-105 transition"
        >

                    💪 ورزشکار هستم
        </button>

        <button
          onClick={() => goToLogin("athlete")}
          className="bg-white p-10 rounded-3xl shadow hover:scale-105 transition"
        >
          🏋️ مربی هستم
        </button>

      </div>
    </div>
  )
}