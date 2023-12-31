import React from "react";
import "../style/Order.css";
function OrderList() {
  return (
    // order list
    <div>
      <div
        className="projects p-20 bg-white rad-10 m-20 container"
        style={{ margin: "auto" }}
      >
        <h2 className="mt-0 mb-20">Order List </h2>
        <div className="responsive-table">
          <table className="fs-15 w-full">
            <thead>
              <tr>
                <td>Name</td>
                <td>Finish Date</td>
                <td>Client</td>
                <td>Price</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ministry Wikipedia</td>
                <td>10 May 2022</td>
                <td>Ministry</td>
                <td>$5300</td>

                <td>
                  <span className="label btn-shape bg-orange c-white">
                    Pending
                  </span>
                </td>
              </tr>
              <tr>
                <td>Elzero Shop</td>
                <td>12 Oct 2021</td>
                <td>Elzero Company</td>
                <td>$1500</td>

                <td>
                  <span className="label btn-shape bg-blue c-white">
                    In Progress
                  </span>
                </td>
              </tr>
              <tr>
                <td>Bouba App</td>
                <td>05 Sep 2021</td>
                <td>Bouba</td>
                <td>$800</td>

                <td>
                  <span className="label btn-shape bg-green c-white">
                    Completed
                  </span>
                </td>
              </tr>
              <tr>
                <td>Mahmoud Website</td>
                <td>22 May 2021</td>
                <td>Mahmoud</td>
                <td>$600</td>

                <td>
                  <span className="label btn-shape bg-green c-white">
                    Completed
                  </span>
                </td>
              </tr>
              <tr>
                <td>Sayed Website</td>
                <td>24 May 2021</td>
                <td>Sayed</td>
                <td>$300</td>

                <td>
                  <span className="label btn-shape bg-red c-white">
                    Rejected
                  </span>
                </td>
              </tr>
              <tr>
                <td>Arena Application</td>
                <td>01 Mar 2021</td>
                <td>Arena Company</td>
                <td>$2600</td>

                <td>
                  <span className="label btn-shape bg-green c-white">
                    Completed
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OrderList;
