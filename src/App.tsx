import "./App.css";
import Login from "./views/Login";
// import Dashboard from './views/Dashboard';
// import UserInfo from './views/UserInfo';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </ Router>
		</div>
	);
}

export default App;
