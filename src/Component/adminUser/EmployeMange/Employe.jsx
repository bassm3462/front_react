import "../style/admin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Box, Toolbar } from "@mui/material";
import ResponsiveDrawer from "../Drawer";
import AddEmploy from "./addEmploy";
import EmployList from "./Employlist";

export default function Employe() {
  const drawerWidth = 240;
  return (
    <Box sx={{ display: "flex" }}>
      <ResponsiveDrawer drawerWidth={drawerWidth} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <AddEmploy />
        <EmployList />
        <Box sx={{ mt: 2 }}></Box>
      </Box>
    </Box>
  );
}
