import { createSlice } from "@reduxjs/toolkit";
import { AddOffers ,getAllOffers} from "./OfferAction";
const OffersState = {
    setOffers: [],
    isSuccess: false,
    isError: false,
    message: "",
    loading: null,
};
const OffersSlice = createSlice({
    name: "Offers",
    initialState: OffersState,
    reducers: {
        clearState: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isFetching = false;
            return state;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(AddOffers.pending, (state) => {
                state = { ...state, loading: true };
            })
            .addCase(AddOffers.fulfilled, (state, action) => {
                if (action?.payload) {
                    state.isError = false;
                    state.isSuccess = true;
                    state.message = action.payload;
                }
            })
            .addCase(AddOffers.rejected, (state, { payload }) => {
                state.isError = true;
                state.loading = false;
                state.isSuccess = false;
                state.message = payload;
            });
            builder
            .addCase(getAllOffers.pending, (state) => {
                state = { ...state, loading: true };
            })
            .addCase(getAllOffers.fulfilled, (state, action) => {
                if (action?.payload) {
                    state.isError = false;
                    state.isSuccess = true;
                    state.setOffers = action.payload;
                }
            })
            .addCase(getAllOffers.rejected, (state, { payload }) => {
                state.isError = true;
                state.loading = false;
                state.isSuccess = false;
                state.message = payload;
            });
    },
});
export default OffersSlice.reducer;
export const userSelector = (state) => state.Offers;
export const { clearState } = OffersSlice.actions;