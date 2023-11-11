import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { displayProduct } from "../../../redux/ProductSlice/ProductAction";
import { backendURL } from "../../../redux/api/axios";
function ListaProduct() {
  const dispatch = useDispatch();
  const Params = useParams();
  const DepartmentID = Params.id;
  const { products } = useSelector((state) => {
    return state.products;
  });
  useEffect(() => {
    dispatch(displayProduct(DepartmentID));
  }, []);
  return (
    <section style={{ }}>
      <div className="text-center container py-5">
        <h4 className=" mb-3">
          <strong>Product</strong>
        </h4>
        <div className="row">
        {
          products.length>0?
        Array.isArray(products) ? (
          products.map(({ _id, image, name, price }) => (
          <div className="col-lg-4 col-md-12 mb-4" key={_id}>
            <div className="card">
             {} <div
                className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                data-mdb-ripple-color="light"
              >
                <Link to={`/Costumer/ProductOverview?idProduct=${_id}&&IdDepartment=${DepartmentID}`}>
                  <img
                    src={`${backendURL}/${image}`}
                    className="w-100"
                  />
                </Link>
              </div>
              <div className="card-body">
                <a href="" className="text-reset">
                  <h5 className="card-title mb-3">{name}</h5>
                </a>
                <a href="" className="text-reset">
                  <p>Category</p>
                </a>
                <h6 className="mb-3">${price}</h6>
              </div>
            </div>
          </div>
          ))): <span>No Product Found</span>:
          <span>
            No Product Found
            </span>}
        </div>
      </div>
    </section>
  );
}
export default ListaProduct;
