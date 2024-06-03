import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getUltrasound= createAsyncThunk(
    "ultrasound/getUltrasound",
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get("/ultrasound");
            if (res.status !== 200) {
                throw new Error("Server error !");
            }
            return res.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);
const ultrasoundSlice = createSlice({
    name: "ultrasound",
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
            .addCase(getUltrasound.pending, (state, action) => {
                state.status = 'loading';
                state.error = '';
            })
            .addCase(getUltrasound.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload;
            })
            .addCase(getUltrasound.fulfilled, (state, action) => {
                state.status = 'resolve';
                state.error = '';
                state.data = action.payload;
                state.dataLength = action.payload.length;
            })
    },
});



export default ultrasoundSlice.reducer;
