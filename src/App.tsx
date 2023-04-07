import Login from "./views/Login";
import TopBar from "./components/TopBar";
import UserList from './views/UserList';
import UserInfo from './views/UserInfo';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ColourModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";

function App() {
	const [theme, colourMode] = useMode();
  const [isLogin, setIsLogin] = useState(true);

	return (
		<ColourModeContext.Provider value={colourMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className="app">
					<TopBar isLogin={isLogin} />
					<div className="content">
						{/* <SideBar /> */}
						<Router>
							<Routes>
								<Route path="/" element={<Login setIsLogin={setIsLogin} />} />
								<Route path="/userlist" element={<UserList setIsLogin={setIsLogin} />} />
								<Route path="/user/:id" element={<UserInfo setIsLogin={setIsLogin} />} />
							</Routes>
						</Router>
					</div>
				</div>
			</ThemeProvider>
		</ColourModeContext.Provider>
	);
}

export default App;
