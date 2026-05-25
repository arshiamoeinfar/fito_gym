import { useState } from "react"

export default function ChatBox() {

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "coach",
      text: "امروز تمرین پا رو کامل انجام بده 💪",
    },
    {
      id: 2,
      sender: "athlete",
      text: "حتماً مربی 🔥",
    },
  ])

  const [input, setInput] = useState("")

  const sendMessage = () => {

    if (!input) return

    const newMessage = {
      id: Date.now(),
      sender: "athlete",
      text: input,
    }

    setMessages([...messages, newMessage])

    setInput("")
  }

  return (
    <div className="bg-white rounded-3xl shadow-md border border-blue-100 p-6 h-[600px] flex flex-col">

      {/* Header */}
      <div className="border-b pb-4 mb-4">

        <h2 className="text-2xl font-bold  dark:text-blue-400">
          چت با مربی 💬
        </h2>

      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 mb-4">

        {messages.map((message) => (

          <div
            key={message.id}
            className={`flex ${message.sender === "athlete"
              ? "justify-end"
              : "justify-start"
            }`}
          >

            <div
              className={`max-w-[70%] p-4 rounded-2xl
              ${message.sender === "athlete"
                ? "bg-blue-600 text-white"
                : "bg-blue-100 text-black"
              }`}
            >

              {message.text}

            </div>

          </div>

        ))}

      </div>

      {/* Input */}
      <div className="flex gap-3">

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="پیام بنویس..."
          className="flex-1 border border-blue-200 rounded-2xl p-3 focus:outline-none focus:border-blue-500"
        />

        <button
          onClick={sendMessage}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-2xl"
        >
          ارسال
        </button>

      </div>

    </div>
  )
}