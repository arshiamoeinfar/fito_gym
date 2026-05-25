export default function RightPanel({
  assistantMode,
  setAssistantMode,
  messages,
  input,
  setInput,
  sendMessage
}) {

  return (
<div className="
  w-[370px]
  bg-white
  dark:bg-[#0F172A]
  border-l
  border-gray-200
  dark:border-gray-800
  flex
  flex-col
">

  {/* Header */}

  <div className="
    p-6
    border-b
    border-gray-100
    dark:border-gray-800
    backdrop-blur-sm
  ">

    <div className="flex items-center justify-between mb-4">

      <div>

        <h2 className="
          text-2xl
          font-bold
          text-blue-700
          dark:text-blue-400
        ">

          {assistantMode === "coach"
            ? "چت مربی 💬"
            : "هوش مصنوعی 🤖"
          }

        </h2>

        <p className="
          text-sm
          text-gray-500
          dark:text-gray-400
          mt-1
        ">

          {assistantMode === "coach"
            ? "ارتباط مستقیم با مربی"
            : "دستیار هوشمند تمرینی"
          }

        </p>

      </div>

      <button
        onClick={() =>
          setAssistantMode(
            assistantMode === "coach"
              ? "ai"
              : "coach"
          )
        }
        className="
          px-4
          py-2
          rounded-2xl
          bg-blue-50
          hover:bg-blue-100
          dark:bg-[#1E293B]
          dark:hover:bg-[#334155]
          text-blue-700
          dark:text-blue-300
          transition
          border
          border-gray-200
          dark:border-gray-700
        "
      >

        {assistantMode === "coach"
          ? "AI"
          : "Coach"
        }

      </button>

    </div>

  </div>

  {/* Messages */}

  <div className="
    flex-1
    overflow-y-auto
    p-6
    space-y-5
  ">

    {messages.map((message) => (

      <div
        key={message.id}
        className={`flex
          ${message.sender === "user"
            ? "justify-end"
            : "justify-start"
          }`}
      >

        <div
          className={`
            max-w-[82%]
            px-5
            py-4
            rounded-3xl
            text-[15px]
            leading-7
            shadow-sm
            border

            ${message.sender === "user"
              ? `
                bg-blue-600
                text-white
                border-blue-500
              `
              : `
                bg-white
                dark:bg-[#1E293B]
                text-gray-800
                dark:text-gray-100
                border-gray-200
                dark:border-gray-700
              `
            }
          `}
        >

          {message.text}

        </div>

      </div>

    ))}

  </div>

  {/* Input */}

  <div className="
    p-5
    border-t
    border-gray-100
    dark:border-gray-800
    bg-white
    dark:bg-[#0F172A]
  ">

    <div className="
      flex
      items-center
      gap-3
      bg-gray-50
      dark:bg-[#111827]
      border
      border-gray-200
      dark:border-gray-700
      rounded-3xl
      px-3
      py-3
    ">

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={
          assistantMode === "coach"
            ? "پیام به مربی..."
            : "سوال از هوش مصنوعی..."
        }
        className="
          flex-1
          bg-transparent
          outline-none
          text-gray-700
          dark:text-white
          placeholder:text-gray-400
        "
      />

      <button
        onClick={sendMessage}
        className="
          bg-blue-600
          hover:bg-blue-700
          text-white
          px-5
          py-2.5
          rounded-2xl
          transition
          border
          border-blue-500
          shadow-sm
        "
      >
        ارسال
      </button>

    </div>

  </div>

</div>
  )
}