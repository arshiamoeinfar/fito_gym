export default function MainContent({ activePage, workouts }) {
  return (
    <div className="flex-1 p-8 overflow-y-auto">
      {/* Workout */}

      {activePage === "workout" && (
        <div>
          <h1 className="text-4xl font-bold  dark:text-blue-400 mb-8">
            برنامه تمرینی 💪
          </h1>

          <div className="space-y-6">
            {workouts.map((workout) => (
              <details
                key={workout.id}
                className="bg-white dark:bg-[#1E293B] rounded-3xl shadow border border-blue-100 p-6"
              >
                <summary className="cursor-pointer list-none">
                  <h2 className="text-2xl font-bold  dark:text-blue-400">
                    {workout.title}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-300 mt-2">تاریخ: {workout.date}</p>
                </summary>

                <div className="mt-6 space-y-4">
                  {workout.exercises.map((exercise, index) => (
                    <div
                      key={index}
                      className="border border-blue-100 rounded-2xl p-4 flex items-center justify-between"
                    >
                      <p>{exercise}</p>

                      <button className="bg-blue-600 text-white px-4 py-2 rounded-xl">
                        انجام شد
                      </button>
                    </div>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      )}

      {/* Progress */}

      {activePage === "progress" && (
        <div>
          <h1 className="text-4xl font-bold  dark:text-blue-400 mb-8">
            وضعیت پیشرفت 📈
          </h1>

          <div className="bg-white dark:bg-[#1E293B] rounded-3xl p-6 shadow border border-blue-100">
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span>پیشرفت عضله سازی</span>

                <span className="font-bold  dark:text-blue-400">72%</span>
              </div>

              <div className="w-full bg-blue-100 rounded-full h-4">
                <div className="bg-blue-600 h-4 rounded-full w-[72%]"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Food */}

      {activePage === "food" && (
        <div>
          <h1 className="text-4xl font-bold  dark:text-blue-400 mb-8">
            برنامه غذایی 🍎
          </h1>

          <div className="space-y-4">
            <div className="bg-white dark:bg-[#1E293B] rounded-3xl p-6 shadow border border-blue-100 text-black dark:text-white">
              🍳 صبحانه — تخم مرغ + نان تست
            </div>

            <div className="bg-white dark:bg-[#1E293B] rounded-3xl p-6 shadow border border-blue-100 text-black dark:text-white">
              🍗 ناهار — مرغ + برنج
            </div>

            <div className="bg-white dark:bg-[#1E293B] rounded-3xl p-6 shadow border border-blue-100 text-black dark:text-white">
              🥩 شام — گوشت + سیب زمینی
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
