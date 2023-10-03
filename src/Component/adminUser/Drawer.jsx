import * as React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Divider,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
  createTheme,
} from "@mui/material";
import { contact, contact2 } from "../Config/Content";
import { useNavigate } from "react-router-dom";
import { Logout } from "@mui/icons-material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../redux/userSlice/userSlice";
import AppBa from "./AppBar";
// const drawerWidth = 240;
function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const Navigate = useNavigate();
  const theme = useTheme();
  const dispatch = useDispatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const logoutHandler = () => {
    dispatch(logout(true));
  };
  const [myMOde, setmyMOde] = React.useState();
  const darkTheme = createTheme({
    palette: {
      // @ts-ignore
      mode: myMOde,
      // @ts-ignore
      ali: {
        main: "#64748B",
        contrastText: "#fff",
      },
    },
  });
  const handlDarkMOde = () => {
    // setmyMOde(toString(Darkmode));
  };
  const drawer = (
    <div>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: { myMOde },
          color: "text.primary",
          borderRadius: 1,
          p: 3,
        }}
      >
        {theme.palette.mode} mode
        <IconButton sx={{}} color="inherit" onClick={handlDarkMOde}>
          {/* {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )} */}
          <Brightness7Icon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {contact.map((text) => {
          return (
            <ListItem key={text.name} disablePadding>
              <ListItemButton
                onClick={() => {
                  Navigate(text.Link);
                }}
              >
                <ListItemIcon>{text.Icon}</ListItemIcon>
                <ListItemText primary={text.name} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        {contact2.map((text) => (
          <ListItem key={text.name} disablePadding>
            <ListItemButton
              onClick={() => {
                Navigate(text.Link);
              }}
            >
              <ListItemIcon>{text.Icon}</ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={logoutHandler}>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <CssBaseline />
      <AppBa
        drawerWidth={props.drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box
        component="nav"
        sx={{ width: { sm: props.drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width:props.drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: props.drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}
ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
