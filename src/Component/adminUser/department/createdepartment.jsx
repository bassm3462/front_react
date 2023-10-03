import "bootstrap/dist/css/bootstrap.min.css";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { Button } from "@mui/material";
import { ColorButtonEdit } from "../../Config/Content";
import { useNavigate } from "react-router";
import { getDepartment } from "../../../redux/DepartmentSlice/departmentAction";
import { useDispatch ,useSelector} from "react-redux";
const DepartmentCreate = () => {
  const dispatch = useDispatch();
  const [Delet, setDelet] = useState([]);
  const { isSuccess, isError, message,departments } = useSelector((state) => {
    return state.departments;
  });
  const Navigate = useNavigate();
  useEffect(() => {
    dispatch(getDepartment());
  }, [isSuccess, isError, Delet]);
  async function Delete(_id) {
    axios({
      method: "DELETE", //request type
      url: `http://localhost:4000/api/Department/Delete/${_id}`,
    })
      .then((response) => {
        console.log(response);
        setDelet(toast.success(response.data.message));
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function handleEdit(_id) {
    Navigate(`/Department/Edit/${_id}`);
  }
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
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  return (
    <>
      <ToastContainer />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Emage</StyledTableCell>
              <StyledTableCell align="right">name</StyledTableCell>
              <StyledTableCell align="right">description</StyledTableCell>
              <StyledTableCell align="right">Category</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(departments)?
            departments.map(({ _id, image, name, description, Category }) => (
              <StyledTableRow key={_id}>
                <StyledTableCell component="th" scope="row">
                  <img
                    src={`http://127.0.0.1:4000/${image}`}
                    alt=""
                    width="200px"
                  />
                </StyledTableCell>
                <StyledTableCell align="right">{name}</StyledTableCell>
                <StyledTableCell align="right">{description}</StyledTableCell>
                <StyledTableCell align="right">{Category}</StyledTableCell>
                <StyledTableCell align="right">
                  {" "}
                  <Button
                    onClick={() => Delete(_id)}
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                  <ColorButtonEdit
                    className="ms-2"
                    type="submit"
                    onClick={() => handleEdit(_id)}
                  >
                    Edit
                  </ColorButtonEdit>
                </StyledTableCell>
              </StyledTableRow>
            )):<span>No Department</span>
            }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DepartmentCreate;
