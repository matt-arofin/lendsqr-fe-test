import "../App.css";
import { tokens } from "../theme";
import StatBox from "../components/StatBox";
import { Box, useTheme } from "@mui/material";
import UserTable from "../components/UserTable";
import { useEffect } from "react";

interface UserListProps {
  setIsLogin?: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserList = ({ setIsLogin }: UserListProps) => {
	const theme = useTheme();
	const colours = tokens(theme.palette.mode);
	
	useEffect(() => {
    if (setIsLogin) {
      setIsLogin(false);
    }
  }, [setIsLogin]);

	return (
		<Box m="20px" bgcolor={"#fff"} textAlign="left">
			<h3>USERS</h3>
      <Box display="flex" justifyContent="space-between">
        <StatBox title="USERS" figure="2,453" />
        <StatBox title="ACTIVE USERS" figure="2,453" />
        <StatBox title="USERS WITH LOANS" figure="12,453" />
        <StatBox title="USERS WITH SAVINGS" figure="102,453" />
      </Box>
			<Box
				m="40px"
				height="75vh"
				sx={{
					"& .MuiDataGrid-root": {
						border: "none",
					},
					"& .MuiDataGrid-cell": {
						borderBottom: "5px",
            borderColor: "black",
					},
					"& .name-column--cell": {
						color: colours.indigo[100],
					},
					"& .MuiDataGrid-columnHeaders": {
						backgroundColor: colours.primary[300],
						borderBottom: "none",
					},
					"& .MuiDataGrid-virtualScroller": {
						backgroundColor: colours.primary[400],
					},
					"& .MuiDataGrid-footerContainer": {
						borderTop: "none",
						backgroundColor: colours.primary[300],
					},
					"& .MuiDataGrid-toolbarContainer .MuiButton-text": {
						color: `${colours.indigo[100]}`,
					},
				}}
			>
				<UserTable />
			</Box>
		</Box>
	);
};

export default UserList;
