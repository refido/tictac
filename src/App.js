import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DetailPage from "./pages/DetailPost"; 
import VideoPlayer from "./pages/VideoPlayer";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route exact path="/video" element={<VideoPlayer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;