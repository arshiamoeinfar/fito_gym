import { useState } from "react";
// import { CheckCircle2, ClipboardList, Dumbbell, Users } from '@phosphor-icons/react'
import StatCard from "./../../../components/StateCard/StateCard";
import StudentCard from "./../../../components/StudentCard/StudentCard";
import WorkoutCard from "./../../../components/WorkOutCard/WorkOutCard";
import { initialStudents } from "./../../../../src/Data/students";
import { workoutPlans } from "./../../../../src/Data/workoutPlans";

export default function FitnessCoachMVP() {
  const [students, setStudents] = useState(initialStudents);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    weight: "",
    height: "",
    goal: "",
  });

  const inputHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addStudentHandler = () => {
    if (!formData.name || !formData.goal) return;

    const newStudent = {
      id: Date.now(),
      ...formData,
    };

    setStudents([...students, newStudent]);

    setFormData({
      name: "",
      age: "",
      weight: "",
      height: "",
      goal: "",
    });
  };

  return (
    <div className="min-h-screen  bg-blue-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Fitness Coach Dashboard</h1>

          <p className="text-gray-500">MVP Version - Coach Panel</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard
            title="Students"
            value={students.length}
            icon={<span className="text-2xl">👥</span>}
          />

          <StatCard
            title="Workout Plans"
            value={workoutPlans.length}
            icon={<span className="text-2xl">📋</span>}
          />

          <StatCard
            title="Completed Workouts"
            value="18"
            icon={<span className="text-2xl">✅</span>}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Add Student</h2>

            <div className="space-y-4">
              <input
                name="name"
                value={formData.name}
                onChange={inputHandler}
                className="w-full border rounded-2xl p-3"
                placeholder="Full Name"
              />

              <input
                name="age"
                value={formData.age}
                onChange={inputHandler}
                className="w-full border rounded-2xl p-3"
                placeholder="Age"
              />

              <input
                name="weight"
                value={formData.weight}
                onChange={inputHandler}
                className="w-full border rounded-2xl p-3"
                placeholder="Weight"
              />

              <input
                name="height"
                value={formData.height}
                onChange={inputHandler}
                className="w-full border rounded-2xl p-3"
                placeholder="Height"
              />

              <input
                name="goal"
                value={formData.goal}
                onChange={inputHandler}
                className="w-full border rounded-2xl p-3"
                placeholder="Goal"
              />

              <button
                onClick={addStudentHandler}
                className="w-full bg-black text-white rounded-2xl p-3 font-semibold hover:opacity-90 transition"
              >
                Add Student
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Students List</h2>

            <div className="space-y-4">
              {students.map((student) => (
                <StudentCard key={student.id} student={student} />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6 mt-8">
          <h2 className="text-2xl font-bold mb-6">Workout Plans</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {workoutPlans.map((plan, index) => (
              <WorkoutCard key={index} plan={plan} />
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6 mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🏋️</span>
            <h2 className="text-2xl font-bold">Today Overview</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="border rounded-2xl p-5">
              <h3 className="font-bold mb-2">Calories Target</h3>
              <p className="text-3xl font-bold">2400</p>
            </div>

            <div className="border rounded-2xl p-5">
              <h3 className="font-bold mb-2">Protein Intake</h3>
              <p className="text-3xl font-bold">165g</p>
            </div>

            <div className="border rounded-2xl p-5">
              <h3 className="font-bold mb-2">Active Students</h3>
              <p className="text-3xl font-bold">12</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
