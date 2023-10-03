import "bootstrap/dist/css/bootstrap.min.css";
import { Box, Toolbar,  } from "@mui/material";
import ResponsiveDrawer from "../Drawer";
import SettingInformation from "./SettingInformation";
export default function Setting() {
  const drawerWidth = 240;
  return (
    <Box sx={{ display: "flex" }}>
      <ResponsiveDrawer drawerWidth={drawerWidth} />
      <Box
        component="main"
        sx={{ flexGrow: 1,p: 3,width: { sm: `calc(100% - ${drawerWidth}px)` }, }}  >
        <Toolbar />
        < SettingInformation />
      </Box>
    </Box>
  );}