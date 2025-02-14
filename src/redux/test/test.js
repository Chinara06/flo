import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getTest = createAsyncThunk(
    "test/getTest",
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get("/test");
            if (res.status !== 200) {
                throw new Error("Server error !");
            }
            return res.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);
const testSlice = createSlice({
    name: "test",
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
            .addCase(getTest.pending, (state, action) => {
                state.status = 'loading';
                state.error = '';
            })
            .addCase(getTest.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload;
            })
            .addCase(getTest.fulfilled, (state, action) => {
                state.status = 'resolve';
                state.error = '';
                state.data = action.payload;
                state.dataLength = action.payload.length;
            })
    },
});



export default testSlice.reducer;
