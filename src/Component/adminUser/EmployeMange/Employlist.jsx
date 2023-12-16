import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  DispalyDataEmploy,
  DeleTeEmploy,
} from "../../../redux/EmploySlice/EmployAction";
import { clearState } from "../../../redux/EmploySlice/EmploySlice";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
export default function EmployList() {
  const { isSuccess, isError, message, employ } = useSelector((state) => {
    return state.Employ;
  });
  console.log(employ);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isError) {
      toast.error(message);
      dispatch(clearState());}
    if (isSuccess) {
      toast.success(message)
      dispatch(clearState()); }
  }, [isSuccess, isError,message]);
  useEffect(() => {
    dispatch(DispalyDataEmploy());
  }, []);
  async function Delete(id) {
    dispatch(DeleTeEmploy(id));}
  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, [isSuccess,isError]);
  return (
    <TableContainer component={Paper}>
      <ToastContainer />
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Employ Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="right">Gender</StyledTableCell>
            <StyledTableCell align="right">Phone</StyledTableCell>
            <StyledTableCell align="right">Department</StyledTableCell>
            <StyledTableCell align="right">Is Active</StyledTableCell>
            <StyledTableCell align="center">Action </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employ.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.Gender}</StyledTableCell>
              <StyledTableCell align="right">{row.Phone}</StyledTableCell>
              <StyledTableCell align="right">
                {row.Department?.name?<span>{row.Department.name}</span>:<span>No Department select</span>}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.code === true ? <span>True</span> : <span>False</span>}
              </StyledTableCell>
              <StyledTableCell align="right">
                <button
                  onClick={() => Delete(row._id)}
                  className="btn btn-dark"
                >
                  Delete
                </button>
                <button className="btn btn-info ms-2">Edit</button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
