import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getIvf = createAsyncThunk(
    "ivf/getIvf",
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get("/ivf");
            if (res.status !== 200) {
                throw new Error("Server error !");
            }
            return res.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);
const ivfSlice = createSlice({
    name: "ivf",
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
            .addCase(getIvf.pending, (state, action) => {
                state.status = 'loading';
                state.error = '';
            })
            .addCase(getIvf.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload;
            })
            .addCase(getIvf.fulfilled, (state, action) => {
                state.status = 'resolve';
                state.error = '';
                state.data = action.payload;
                state.dataLength = action.payload.length;
            })
    },
});



export default ivfSlice.reducer;
