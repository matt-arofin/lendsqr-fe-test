import "../App.css";
import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColourModeContext, tokens } from "../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../assets/logo.png";
import company from "../assets/lendsqr.png";
import profile from "../assets/profile.png";
import vector from "../assets/vector.png";
// import setIsLogin from "../views/Login";
import isLogin from "../views/Login";

const TopBar = () => {
	const theme = useTheme();
	const colours = tokens(theme.palette.mode);
	const colourMode = useContext(ColourModeContext);
  // setIsLogin(false);

	return (
		<Box className="top-bar" display="flex" justifyContent="space-between" p={2} bgcolor="#FFFFFF">
			<div className="company-logo">
				<img src={logo} alt="logo" />
				<img src={company} alt="Lendsqr" />
			</div>
      {!isLogin && (
        <Box
        display="flex"
        borderRadius="3px"
        borderColor={"#39CDCC"}
        bgcolor={colours.primary[100]}
        >
        {/* Search Bar */}
       <InputBase sx={{ ml: 2, flex: 1}} placeholder="Search for anything" /> 
       <IconButton type="button" sx={{ p: 1 }}>
        <SearchIcon />
       </IconButton>
      </Box>
      )}

        {!isLogin && (
      <Box display="flex" justifyContent="space-evenly">
        {/* Light mode button */}
        <IconButton className="display-mode-btn" onClick={colourMode.toggleColorMode}>
          {theme.palette.mode === "light" ? (
            <LightModeOutlinedIcon />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </IconButton>
        {/* docs link */}
        <a href="/">docs</a>
        {/* notification icon */}
        <IconButton className="notification-btn">
          <NotificationsOutlinedIcon />
        </IconButton>

        {/* profile/settings image + name */}
        <div className="profile-settings">
          <img src={profile} alt="profile" />
          <p>Adedeji  <img src={vector} alt="vector" /> </p>
        </div>
      </Box>
        )}

		</Box>
	);
};

export default TopBar;
