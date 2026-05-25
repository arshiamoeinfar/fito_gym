import Dashboard from "./pages/DashBoard/dashboard";
import Home from "./pages/HomeLoad/home";
import CoachLogin from "./pages/Login/AthleteLogin";
import AthleteLogin from "./pages/Login/CoachLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login/coach" element={<CoachLogin />} />
        <Route path="/login/athlete" element={<AthleteLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
