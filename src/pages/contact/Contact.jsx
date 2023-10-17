import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import { rows,columns } from "./data"
import {Box } from "@mui/material";
import Header from "../../components/Header";
const Contact = () => {
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
    <Header title={"CONTACT"} subTitle={"List of Contacts for Future Reference"} />
    <DataGrid 
     slots={{
      toolbar: GridToolbar,
    }}
    rows={rows} columns={columns} />
  </Box>
  )
}

export default Contact