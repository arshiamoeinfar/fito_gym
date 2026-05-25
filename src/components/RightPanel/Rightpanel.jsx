export default function RightPanel({
  assistantMode,
  setAssistantMode,
  messages,
  input,
  setInput,
  sendMessage
}) {

  return (
<div className="w-[350px]
bg-white
dark:bg-[#111827]
border-l
border-blue-100
dark:border-gray-800
flex
flex-col">

      {/* Header */}

      <div className="p-6 border-b border-blue-100">

        <div className="flex items-center justify-between mb-4">

          <h2 className="text-2xl font-bold  dark:text-blue-400">

            {assistantMode === "coach"
              ? "چت مربی 💬"
              : "هوش مصنوعی 🤖"
            }

          </h2>

          <button
            onClick={() =>
              setAssistantMode(
                assistantMode === "coach"
                  ? "ai"
                  : "coach"
              )
            }
            className="bg-blue-100 hover:bg-blue-200  dark:text-blue-400 px-4 py-2 rounded-xl"
          >

            {assistantMode === "coach"
              ? "AI"
              : "Coach"
            }

          </button>

        </div>

      </div>

      {/* Messages */}

      <div className="flex-1 overflow-y-auto p-6 space-y-4">

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
              className={`max-w-[80%] p-4 rounded-2xl
                ${message.sender === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-blue-100"
                }`}
            >

              {message.text}

            </div>

          </div>

        ))}

      </div>

      {/* Input */}

      <div className="p-6 border-t border-blue-100">

        <div className="flex gap-3">

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="پیام بنویس..."
            className="flex-1 border border-blue-200 rounded-2xl p-3"
          />

          <button
            onClick={sendMessage}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 rounded-2xl"
          >
            ارسال
          </button>

        </div>

      </div>

    </div>
  )
}