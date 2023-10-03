import "../style/admin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Box, Toolbar } from "@mui/material";
import ResponsiveDrawer from "../Drawer";
import DepartmentCreate from "./createdepartment";
import Modul from "./Modul";
export default function Employe() {
  const drawerWidth = 240;
  return (
    <Box sx={{ display: "flex" }}>
      <ResponsiveDrawer drawerWidth={drawerWidth}/>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Modul />
        <DepartmentCreate />
      </Box>
    </Box>
  );
}
