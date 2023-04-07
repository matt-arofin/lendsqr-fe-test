import "../App.css";
import { tokens } from "../theme";
import StatBox from "../components/StatBox";
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar, GridColDef } from "@mui/x-data-grid";
import axios from "axios";
import UserTable from "../components/UserTable";

const UserList = () => {
	const theme = useTheme();
	const colours = tokens(theme.palette.mode);

	return (
		<Box m="20px" bgcolor={"#fff"}>
			<h3>USERS</h3>
			<Box
				m="40px"
				height="75vh"
				sx={{
					"& .MuiDataGrid-root": {
						border: "none",
					},
					"& .MuiDataGrid-cell": {
						borderBottom: "1px",
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
