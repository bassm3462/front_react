import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { ArrowBack, ShoppingCart } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router';
import { Avatar, Badge } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deepPurple } from '@mui/material/colors';
import{getTotals}from "../../../redux/CartSlice/CardSlice"
import {getSingleDepartment}from "../../../redux/DepartmentSlice/departmentAction"
export default function HeaderProduct( ) {
  const dispatch = useDispatch();
  const Params = useParams();
  const {  cartItem,cartTotalQuantity} = useSelector((state) => {
    return state.OrderS;
  });
  useEffect(() => {
    dispatch(getSingleDepartment(Params.id));
  }, []);
  const { departments } = useSelector((state) => {
    return state.departments;
  });
    const Navigate = useNavigate()
    const handlBack =()=>{
        Navigate("/User/home")
    }
    const handlCard=()=>{
      Navigate("/Costumer/Card")
    }
    useEffect(()=>{
      dispatch(getTotals())
    },[cartItem ,dispatch])
  return (
    <Box sx={{ flexGrow: 1, backgroundColor:"black" }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handlBack}
          >
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {departments.name}
          </Typography>
          <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={handlCard}
            >
              <Badge badgeContent={cartTotalQuantity} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>
            <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
        </Toolbar>
      </AppBar>
    </Box>
  );
}