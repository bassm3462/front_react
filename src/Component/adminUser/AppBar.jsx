import * as React from "react";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import { backendURL } from "../../redux/api/axios";
function AppBa({ drawerWidth, handleDrawerToggle }) {
  const info = JSON.parse(localStorage.getItem("user"));
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
      {info.user_type}
        </Typography>
        <Typography variant="h6" noWrap component="p" sx={{ marginRight: 3 }}>
          {info.name}
        </Typography>
        <Avatar alt="Remy Sharp" src={`${backendURL}/${info.image}`} />
      </Toolbar>
    </AppBar>
  );
}
export default AppBa;
