import axios from "../../utils/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const getLibrary = createAsyncThunk(
    "library/getLibrary",
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get("/library");
            if (res.status !== 200) {
                throw new Error("Server error !");
            }
            return res.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);
const librarySlice = createSlice({
    name: "library",
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
            .addCase(getLibrary.pending, (state, action) => {
                state.status = 'loading';
                state.error = '';
            })
            .addCase(getLibrary.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload;
            })
            .addCase(getLibrary.fulfilled, (state, action) => {
                state.status = 'resolve';
                state.error = '';
                state.data = action.payload;
                state.dataLength = action.payload.length;
            })
    },
});



export default librarySlice.reducer;
