import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Auth from "./components/Auth/Auth";
import Single from "./components/SingleItem/Single";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/store/:name" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
