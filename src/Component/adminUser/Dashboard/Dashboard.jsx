import React, { useEffect, useState } from "react";
import "../style/Order.css";
import "../style/fremwork.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/dashboard.css";
import Charts from "./Charts/ChartsLines";
import ChartPin from "./Charts/ChartPie";
import { boxInformationOrder } from "../../Config/Content";
import { Box } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
const Dashborad = () => {
  return (
    <div className="">
      <h1 class=" position-relative h1Dahboard">Dashboard</h1>
      <div className="d-flex justify-content-between align-center flex-warp gap-2 mb-5 mt-4">
        {boxInformationOrder.map((item, index) => (
          <Box key={index} className="p-20 rad-10 boxDepartment ">
            <h2>{item.Department}</h2>
            <div className="position-relative heightDivMSUBMAIN">
              <div className="  mt-4 gap-4 positiontoDisplay">
                <div className="divToDisplaystring m-0">
                  <p>
                    Name:{item.Name} <br />
                    <span>quantity:{item.quantity}</span>
                  </p>
                </div>
                {/* item.number */}
                <div>
                  <p>price:{item.PriceUnit}</p>
                  <span>quantity:{item.TotalPrice}</span>
                </div>
              </div>
            </div>
          </Box>
        ))}
      </div>
      <div class=" welcome bg-white rad-10 txt-c-mobile block-mobile">
        <div class="intro p-20  bg-eee">
          <div> Website visit</div>
        </div>
        <div class="body txt-c d-flex p-20 mt-20 mb-20 block-mobile">
          <div style={{ width: "auto", maxWidth: "100%", margin: "auto" }}>
            <Charts />
          </div>
        </div>
      </div>
      {/*  circular chart  */}
      <div className="settings-page mt-20 d-grid gap-20">
        <div className=" pb-20 bg-white rad-10 overflow-hidden ">
          <div
            class="intro p-20  bg-eee  "
          >
            <div> circular charts</div>
          </div>
          <div className="p-20 chartPie  ">
          <div style={{ width: "auto", maxWidth: "100%", margin: "auto" }}><ChartPin /></div>  
          </div>
        </div>
        <div className=" bg-white rad-10 ">
        <div
            class="intro p-20  bg-eee  "
          >
            <div> circular charts</div>
          </div>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
};
export default Dashborad;
