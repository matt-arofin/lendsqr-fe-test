import { useEffect, useState } from "react";
import { DataGrid, GridColDef, GridToolbar, GridRowParams } from "@mui/x-data-grid";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const root = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1";

interface User {
	id: string;
	orgName: string;
	userName: string;
	email: string;
	phoneNumber: string;
	createdAt: string;
	status: string;
}

const columns: GridColDef[] = [
	{
		field: "id",
		headerName: "ID",
		flex: 0.5,
	},
	{
		field: "orgName",
		headerName: "Organisation",
		flex: 1,
		cellClassName: "organisation-column--cell",
	},
	{
		field: "userName",
		headerName: "Username",
		headerAlign: "left",
		align: "left",
	},
	{
		field: "email",
		headerName: "Email",
		flex: 1,
	},
	{
		field: "phoneNumber",
		headerName: "Phone Number",
		flex: 1,
	},
	{
		field: "createdAt",
		headerName: "Date Joined",
		flex: 1,
	},
	{
		field: "status",
		headerName: "Status",
		flex: 1,
	},
];

const UserTable = () => {
	const [users, setUsers] = useState<User[]>([]);
	const navigate = useNavigate();

	const handleRowClick = (params: GridRowParams, event: any) => {
		const id = params.row.id;
		navigate(`/user/${id}`);
	};

	useEffect(() => {
		const fetchUsers = async () => {
			const response = await axios.get<User[]>(`${root}/users`);
			setUsers(response.data);
		};

		fetchUsers();
	}, []);

	return (
		<div style={{ height: 600, width: "100%" }}>
			<DataGrid
				rows={users}
				columns={columns}
				components={{ Toolbar: GridToolbar }}
				onRowClick={handleRowClick}
			/>
		</div>
	);
};

export default UserTable;
