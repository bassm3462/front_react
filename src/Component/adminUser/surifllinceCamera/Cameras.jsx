import "bootstrap/dist/css/bootstrap.min.css";
import { Box, CssBaseline, Toolbar,  } from "@mui/material";
import ResponsiveDrawer from "../Drawer";
import CameraLIst from "./CameraLIst"
export default function Cameras() {
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
        <CameraLIst />
      </Box>
    </Box>
 
  );
}
