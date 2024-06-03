import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getPregnancyCalc = createAsyncThunk(
    "pregnancyCalc/getPregnancyCalc",
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get("/pregnancyCalc");
            if (res.status !== 200) {
                throw new Error("Server error !");
            }
            return res.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);
const pregnancyCalcSlice = createSlice({
    name: "pregnancyCalc",
    initialState: {
        data:[],
        status: "",
        error:"",
        dataLength:0,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getPregnancyCalc.pending, (state, action) => {
                state.status = 'loading';
                state.error = '';
            })
            .addCase(getPregnancyCalc.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload;
            })
            .addCase(getPregnancyCalc.fulfilled, (state, action) => {
                state.status = 'resolve';
                state.error = '';
                state.data = action.payload;
                state.dataLength = action.payload.length;
            })
    },
});



export default pregnancyCalcSlice.reducer;