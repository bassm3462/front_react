import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useSelector, useDispatch } from "react-redux";
import { getAllOffers } from "../../../redux/Offers/OfferAction";
import { Box, Button } from "@mui/material";
import { backendURL } from "../../../redux/api/axios";
export default function CardOffer() {
  const { isSuccess, message, setOffers } = useSelector((state) => {
    return state.Offers;
  });
  console.log(setOffers[0]);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAllOffers());
  }, [isSuccess, dispatch]);
  return (
    <>
      {setOffers && setOffers.length > 0 ? (
        setOffers.map((item, index) => (
          <Card sx={{ maxWidth: 500, margin: "20px" }} key={index}>
            <CardHeader
              avatar={
                <Avatar
                  alt="Remy Sharp"
                  src={`${backendURL}/${item.DepartmentID.image}`}
                />
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={`${item.DepartmentID.name},${item.Title}`}
              subheader={`Date Publishing: ${item.currentDate}`}
            />
            <CardMedia
              component="img"
              height="194"
              image={`${backendURL}/${item.image}`}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions
              disableSpacing
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-center" ,alignItems:"center"}}>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <Typography sx={{ color: "#706c6c", cursor: "pointer" }}>
                  Price:${item.price}
                </Typography>
              </Box>
              <Button> Buy</Button>
            </CardActions>
          </Card>
        ))
      ) : (
        <span>"loading..."</span>
      )}
    </>
  );
}
