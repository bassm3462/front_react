import "bootstrap/dist/css/bootstrap.min.css";
import { Box, Toolbar,  } from "@mui/material";
import ResponsiveDrawer from "../Drawer";
import OrderList from "./OrderList";
export default function Order() {
  
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
        < OrderList />
      </Box>
    </Box>
 
  );
}