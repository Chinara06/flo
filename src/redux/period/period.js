import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getPeriod = createAsyncThunk(
    "period/getPeriod",
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get("/period");
            if (res.status !== 200) {
                throw new Error("Server error !");
            }
            return res.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);
const periodSlice = createSlice({
    name: "period",
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
            .addCase(getPeriod.pending, (state, action) => {
                state.status = 'loading';
                state.error = '';
            })
            .addCase(getPeriod.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload;
            })
            .addCase(getPeriod.fulfilled, (state, action) => {
                state.status = 'resolve';
                state.error = '';
                state.data = action.payload;
                state.dataLength = action.payload.length;
            })
    },
});



export default periodSlice.reducer;
