export default function Sidebar({
  activePage,
  setActivePage
}) {

  return (
    <div className="w-[260px] bg-white border-r border-blue-100 p-6 flex flex-col">

      <div className="mb-10">

        <h1 className="text-3xl font-bold text-blue-700">
          FitAI
        </h1>

        <p className="text-gray-500 text-sm mt-1">
          Athlete Dashboard
        </p>

      </div>

      <div className="space-y-3">

        <button
          onClick={() => setActivePage("workout")}
          className={`w-full p-4 rounded-2xl text-right transition
            ${activePage === "workout"
              ? "bg-blue-600 text-white"
              : "hover:bg-blue-100"
            }`}
        >
          💪 برنامه تمرینی
        </button>

        <button
          onClick={() => setActivePage("progress")}
          className={`w-full p-4 rounded-2xl text-right transition
            ${activePage === "progress"
              ? "bg-blue-600 text-white"
              : "hover:bg-blue-100"
            }`}
        >
          📈 پیشرفت
        </button>

        <button
          onClick={() => setActivePage("food")}
          className={`w-full p-4 rounded-2xl text-right transition
            ${activePage === "food"
              ? "bg-blue-600 text-white"
              : "hover:bg-blue-100"
            }`}
        >
          🍎 برنامه غذایی
        </button>

      </div>

      <div className="mt-auto">

        <div className="bg-blue-50 p-4 rounded-2xl">

          <p className="font-bold text-blue-700">
            ارشیا
          </p>

          <p className="text-gray-500 text-sm">
            Athlete Account
          </p>

        </div>

      </div>

    </div>
  )
}