import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AddBox, GradingOutlined, GradingTwoTone, Home, ManageAccounts, NotificationsActive, PersonAdd, Settings, VideoCameraBack } from "@mui/icons-material";
import { Button, Link } from "@mui/material";
import { cyan, grey, indigo, pink, purple } from "@mui/material/colors";
import { styled } from '@mui/material/styles';
// import styled from 'styled-components'
export const contact = [
  {
    name: "Dashboard",
    Link: "/Admin/Dashboard",
    Icon: <Home />,
  },
  {
    name: "Manage Department",
    Link: "/admin/create",
    Icon: <AddBox />,
  },
  {
    name: "Manage Employ",
    Link: "/admin/Employ",
    Icon: <PersonAdd />,
  },
  {
    name: "Manage Order",
    Link: "/admin/Order",
    Icon: <GradingTwoTone />,
  },
  {
    name: "Manage Product",
    Link: "/admin/Product",
    Icon: <FontAwesomeIcon icon={faListCheck} size="lg" />,
  },
];
export const contact2 = [
 
  {
    name: "Notifications ",
    Link: "/Admin/Dashboard",
    Icon: <NotificationsActive />,
  },
  {
    name: "Profile",
    Link: "/Information/user",
    Icon: <ManageAccounts />,
  },
  {
    name: "Setting",
    Link: "/admin/Setting",
    Icon: <Settings />,
  },
];
// end link admin
// start link Employ
export const EmployLink = [
  {
    name: "Dashboard",
    Link: "/Employ/Dashboard",
    Icon: <Home />,
  },
  {
    name: "Product",
    Link: "/Employ/Products/",
    Icon: <AddBox />,
  },
  {
    name: "Add New Product",
    Link: "/Employ/Add/Products/",
    Icon: <PersonAdd />,
  },

  {
    name: "Add Offers",
    Link: "/Employ/offers",
    Icon: <PersonAdd />,
  },
];
export const EmployLink2 = [
  {
    name: "Notifications",
    Link: "/Employ/offers",
    Icon: <NotificationsActive />,
  },
  {
    name: "Profile",
    Link: "/Employ/offers",
    Icon: <ManageAccounts />,
  },
 
];

export const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

export const ColorButtonEdit = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(indigo[50]),
  backgroundColor: purple[50],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

export const ColorLink = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));
export const ButtonClearState = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: cyan[400],
  '&:hover': {
    backgroundColor: cyan[900],
  },
}));
export const ButtonSave = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[500]),
  backgroundColor: grey[400],
  '&:hover': {
    backgroundColor: grey[900],
  },
}));
export const boxInformationOrder =[
  {
    Name :"Name of Camera ",
    Department:"Camera",
    quantity:"100",
    PriceUnit:"$20",
    TotalPrice:"$2000",
  },
  {
    Name :"Name of tablets ",
    Department:"tablets",
    quantity:"150",
    PriceUnit:"$20",
    TotalPrice:"$300"

  },
  {
    Name :"Name of Camera ",
    Department:"Camera",
    quantity:"100",
    PriceUnit:"$20",
    TotalPrice:"$2000",
  },
  {
    Name :"Name of tablets ",
    Department:"tablets",
    quantity:"150",
    PriceUnit:"$20",
    TotalPrice:"$300"

  }
]