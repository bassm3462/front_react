import { Box, Toolbar } from "@mui/material";
import ResponsiveDrawer from "../Drawer/Drawer";
import AddNewOffers from "./AddOffers";
export default function EmployOffers() {
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
        <AddNewOffers />
      </Box>
    </Box>
  );
}
