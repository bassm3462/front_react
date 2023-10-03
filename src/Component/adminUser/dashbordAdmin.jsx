import "bootstrap/dist/css/bootstrap.min.css";
import { Box, CssBaseline, Toolbar,  } from "@mui/material";
import ResponsiveDrawer from "./Drawer";
import Dashborad from "./Dashboard.jsx";
export default function DashbordAdmin() {
  
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
        <Dashborad />
      </Box>
    </Box>
 
  );
}
