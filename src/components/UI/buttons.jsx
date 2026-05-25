export default function Button({
  children,
  onClick,
  variant = "primary",
  fullWidth = false,
  disabled = false,
  icon,
}) {

  const baseStyle =
    "flex items-center justify-center gap-2 px-5 py-3 rounded-2xl font-medium transition duration-200"

  const variants = {

    primary:
      "bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600",

    secondary:
      "bg-blue-100 hover:bg-blue-200 text-blue-700 dark:bg-[#1E293B] dark:text-white dark:hover:bg-[#334155]",

    outline:
      "border border-blue-300 text-blue-700 hover:bg-blue-50 dark:border-gray-700 dark:text-white dark:hover:bg-[#1E293B]",

    danger:
      "bg-red-500 hover:bg-red-600 text-white",

    success:
      "bg-green-500 hover:bg-green-600 text-white",

  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyle}
        ${variants[variant]}
        ${fullWidth ? "w-full" : ""}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >

      {icon && icon}

      {children}

    </button>
  )
}