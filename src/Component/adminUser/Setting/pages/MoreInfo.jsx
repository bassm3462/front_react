import { AddLocationAlt } from '@mui/icons-material';
import React from 'react';
import { ButtonClearState, ButtonSave } from '../../../Config/Content';

const MoreInfo = () => {
    return (
        <div className="p-20 bg-white rad-10">
        <h2 className="mt-0 mb-10">Company Information</h2>
        <p className="mt-0 mb-20 c-grey fs-15">Information About Company</p>
        <div className="sec-box mb-15">
          <form action="">
            <label htmlFor="Location">
              {" "}
              Add Location company{" "}
            </label>
            <input type="text" className=" form-control m-2" />
            <label htmlFor="Location"> Business Hours </label>
            <input type="text" className=" form-control m-2" />
            <label htmlFor="Location">Phone Number </label>
            <input type="text" className=" form-control m-2" />
          </form>
        </div>
        <div className="mt-3">
          <ButtonSave className="me-3">Save</ButtonSave>
          <ButtonClearState>Edit About</ButtonClearState>
        </div>
      </div>
    );
}
export default MoreInfo;
