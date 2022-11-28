import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import CreateElection from "./components/CreateElection";
import Elections from "./components/Elections";
import Posts from "./components/Posts";

const App = () => {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to={"/"}>Elections</Link>
        <Link to={"/create"}>+ Election</Link>
      </nav>
      <Routes>
        {/* <Route path="/" element={<Elections />} /> */}
        <Route path="/" element={<Posts/>} />
        <Route path="/create" element={<CreateElection />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
