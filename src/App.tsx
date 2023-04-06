import Login from "./views/Login";
import TopBar from "./components/TopBar";
import UserList from './views/UserList';
// import UserInfo from './views/UserInfo';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ColourModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
	const [theme, colourMode] = useMode();

	return (
		<ColourModeContext.Provider value={colourMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className="app">
					<TopBar />
					<div className="content">
						{/* <SideBar /> */}
						<Router>
							<Routes>
								<Route path="/" element={<Login />} />
								<Route path="/userlist" element={<UserList />} />
								{/* <Route path="/user/:id" element={<UserInfo />} /> */}
							</Routes>
						</Router>
					</div>
				</div>
			</ThemeProvider>
		</ColourModeContext.Provider>
	);
}

export default App;
