import CoachDashboard from "../CoachDashboard/Coachdashboard"
import AthleteDashboard from "../AthleteDashboard/AthleteDashboard"
export default function Dashboard() {
  const role = localStorage.getItem("role")

  if (!role) {
    return <h1>No role found</h1>
  }

  if (role === "coach") return <CoachDashboard />

  return <AthleteDashboard />
}