import { useTheme } from "./../../Context/ThemeContext";

export default function Sidebar({ activePage, setActivePage }) {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div
      className="w-[260px]
bg-white
dark:bg-[#111827]
border-r
border-blue-100
dark:border-gray-800
p-6
flex
flex-col
border-l"
    >
      <div className="mb-10">
        <h1 className="text-3xl font-bold  dark:text-blue-400">FitAI</h1>

        <p className="text-gray-500  dark:text-gray-300 text-sm mt-1">
          Athlete Dashboard
        </p>
      </div>
      <div className="space-y-3">
        <button
          onClick={() => setActivePage("workout")}
          className={`
      w-full
      flex
      items-center
      gap-3
      px-5
      py-4
      rounded-2xl
      transition-all
      duration-200
      font-medium
      text-lg

      ${
        activePage === "workout"
          ? `
          bg-blue-600
          text-white
          shadow-lg
          scale-[1.02]
        `
          : `
          bg-white
          text-gray-700
          hover:bg-blue-100
          hover:text-blue-700
          dark:bg-[#111827]
          dark:text-gray-200
          dark:hover:bg-[#1E293B]
        `
      }
    `}
        >
          <span className="text-2xl">💪</span>

          <span>برنامه تمرینی</span>
        </button>

        <button
          onClick={() => setActivePage("progress")}
          className={`
      w-full
      flex
      items-center
      gap-3
      px-5
      py-4
      rounded-2xl
      transition-all
      duration-200
      font-medium
      text-lg

      ${
        activePage === "progress"
          ? `
          bg-blue-600
          text-white
          shadow-lg
          scale-[1.02]
        `
          : `
          bg-white
          text-gray-700
          hover:bg-blue-100
          hover:text-blue-700
          dark:bg-[#111827]
          dark:text-gray-200
          dark:hover:bg-[#1E293B]
        `
      }
    `}
        >
          <span className="text-2xl">📈</span>

          <span>پیشرفت</span>
        </button>

        <button
          onClick={() => setActivePage("food")}
          className={`
      w-full
      flex
      items-center
      gap-3
      px-5
      py-4
      rounded-2xl
      transition-all
      duration-200
      font-medium
      text-lg

      ${
        activePage === "food"
          ? `
          bg-blue-600
          text-white
          shadow-lg
          scale-[1.02]
        `
          : `
          bg-white
          text-gray-700
          hover:bg-blue-100
          hover:text-blue-700
          dark:bg-[#111827]
          dark:text-gray-200
          dark:hover:bg-[#1E293B]
        `
      }
    `}
        >
          <span className="text-2xl">🍎</span>

          <span>برنامه غذایی</span>
        </button>
      </div>

      <div className="mt-auto">
        <div className="bg-blue-50 p-4 rounded-2xl dark:bg-gray-800">
          <p className="font-bold  dark:text-blue-400">ارشیا</p>

          <p className="text-gray-500  dark:text-gray-300 text-sm">
            Athlete Account
          </p>
        </div>
        <button
          onClick={toggleTheme}
          className="w-full bg-blue-100 dark:bg-gray-800 dark:text-white p-4 rounded-2xl transition mt-4"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </div>
  );
}
