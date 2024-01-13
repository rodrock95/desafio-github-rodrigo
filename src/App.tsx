import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import HomeGH from "./routes/Home/HomeGH";
import Before from "./routes/Home/Before";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} >
        <Route index element={<Navigate to={"/home"} />} />
        <Route path="/home" element={<HomeGH />} />
        <Route path="findProfile" element={<Before />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
