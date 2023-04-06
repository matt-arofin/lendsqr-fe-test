import './App.css';
import { tokens } from "../theme";
import StatBox from "../components/StatBox";
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from 'axios';

const UserList = () => {
  const theme = useTheme();
  const colours = tokens(theme.palette.mode)

  const columns = [
    {
        field: "organisation", 
        headerName: "Organisation", 
        flex: 1, 
        cellClassName: "organisation-column--cell"
    },
    {
        field: "username", 
        headerName: "Username",
        headerAlign: "left",
        align: "left",
    },
    {
        field: "email", 
        headerName: "Email",
        flex: 1
    },
    {
      field: "phone", 
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "date joined", 
      headerName: "Date Joined",
      flex: 1
    },
    {
      field: "status", 
      headerName: "Status",
      flex: 1
    },
]

return (
  <Box m="20px">
      <h3>USERS</h3>
      <Box
          m="40px"
          height="75vh"
          sx={{
              "& .MuiDataGrid-root": {
                  border: "none",
              },
              "& .MuiDataGrid-cell": {
                  borderBottom: "none",
              },
              "& .name-column--cell": {
                  color: colours.greenAccent[300]
              },
              "& .MuiDataGrid-columnHeaders": {
                  backgroundColor: colours.blueAccent[700],
                  borderBottom: "none"
              },
              "& .MuiDataGrid-virtualScroller": {
                  backgroundColor: colours.primary[400]
              },
              "& .MuiDataGrid-footerContainer": {
                  borderTop: "none",
                  backgroundColor: colours.blueAccent[700]
              },
              "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                  color: `${colours.grey[100]}`
              }
          }}
      >
          <DataGrid 
              rows={mockDataContacts}
              columns={columns}
              components={{ Toolbar: GridToolbar}}
          />
      </Box>
  </Box>
)
}

export default UserList