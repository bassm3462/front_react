import PersonalProfile from "./informationUser"
import "bootstrap/dist/css/bootstrap.min.css";
import { Box, CssBaseline, Toolbar, } from "@mui/material";
import ResponsiveDrawer from "../../adminUser/Drawer";
import { useEffect, useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
export default function User() {
  const [loading, setLoading] = useState(false);
  // const override:CSSProperties = {
  //   display: "block",
  //   margin: "0 auto",
  //   borderColor: "red",
  // };
  // let [color, setColor] = useState("#ffffff");
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 500);
  }, [])
  const drawerWidth = 240;
  return (
    <Box sx={{ display: "flex" }}>
      <>
        <ResponsiveDrawer drawerWidth={drawerWidth} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            backgroundColor: '#f4f5f7',
            height: "100vh"
          }}
        >
          <Toolbar />
          <PersonalProfile />
        </Box>
      </>
    </Box>

  );
}

