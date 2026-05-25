import { useState } from "react"

import Sidebar from "../../components/Sidebar/Sidebar"
import MainContent from "../../components/MainContent/Maincontent"
import RightPanel from "../../components/RightPanel/Rightpanel"

export default function AthleteDashboard() {

  const [activePage, setActivePage] = useState("workout")

  const [assistantMode, setAssistantMode] = useState("coach")

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "coach",
      text: "امروز تمرینت رو کامل انجام بده 🔥"
    }
  ])

  const [input, setInput] = useState("")

  const workouts = [
    {
      id: 1,
      title: "تمرین سینه",
      date: "1405/03/05",
      exercises: [
        "پرس سینه 4 × 10",
        "بالا سینه دمبل 3 × 12",
      ]
    },
    {
      id: 2,
      title: "تمرین پا",
      date: "1405/03/06",
      exercises: [
        "اسکوات 4 × 10",
        "پرس پا 3 × 12",
      ]
    }
  ]

  const sendMessage = () => {

    if (!input) return

    const newMessage = {
      id: Date.now(),
      sender: "user",
      text: input
    }

    setMessages([...messages, newMessage])

    setInput("")
  }

  return (
    <div className="min-h-screen bg-blue-50 flex">

      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <MainContent
        activePage={activePage}
        workouts={workouts}
      />

      <RightPanel
        assistantMode={assistantMode}
        setAssistantMode={setAssistantMode}
        messages={messages}
        input={input}
        setInput={setInput}
        sendMessage={sendMessage}
      />

    </div>
  )
}