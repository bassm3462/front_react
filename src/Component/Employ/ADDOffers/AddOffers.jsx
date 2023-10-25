import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ToastContainer, toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { ColorButtonEdit } from "../../Config/Content";
import { useDispatch, useSelector } from "react-redux";
import { getAllOffers } from "../../../redux/Offers/OfferAction";
import Module from "./Module";
import { useEffect } from "react";
const AddNewOffers = () => {
  const { isSuccess, message, setOffers } = useSelector((state) => {
    return state.Offers;
  });
  const dispatch = useDispatch();
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
  useEffect(() => {
    dispatch(getAllOffers());
  }, [isSuccess, dispatch]);

  return (
    <>
      <ToastContainer />
      <TableContainer component={Paper}>
        <div className="mb-3">
          <Module />
        </div>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Image</StyledTableCell>
              <StyledTableCell align="right">Title</StyledTableCell>
              <StyledTableCell align="right">description</StyledTableCell>
              <StyledTableCell align="right">DisCount</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right">Total Price</StyledTableCell>
              <StyledTableCell align="right">Date Publishing</StyledTableCell>

              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(setOffers) ? (
              setOffers.map(
                ({
                  _id,
                  image,
                  Title,
                  description,
                  discount,
                  price,
                  currentDate,
                }) => (
                  <StyledTableRow key={_id}>
                    <StyledTableCell component="th" scope="row">
                      <img
                        src={`http://127.0.0.1:4000/${image}`}
                        alt=""
                        width="200px"
                      />
                    </StyledTableCell>
                    <StyledTableCell align="right"> {Title}</StyledTableCell>
                    <StyledTableCell align="right">
                      {description}
                    </StyledTableCell>
                    <StyledTableCell align="right">${discount}</StyledTableCell>
                    <StyledTableCell align="right">${price}</StyledTableCell>
                    <StyledTableCell align="right">
                      ${price * discount}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {currentDate}
                    </StyledTableCell>

                    <StyledTableCell align="right">
                      {" "}
                      <Button variant="outlined" startIcon={<DeleteIcon />}>
                        Delete
                      </Button>
                      <ColorButtonEdit className="ms-2" type="submit">
                        Edit
                      </ColorButtonEdit>
                    </StyledTableCell>
                  </StyledTableRow>
                )
              )
            ) : (
              <span> no offer</span>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default AddNewOffers;
