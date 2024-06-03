import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getDue = createAsyncThunk(
    "due/getDue",
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get("/due");
            if (res.status !== 200) {
                throw new Error("Server error !");
            }
            return res.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);
const dueSlice = createSlice({
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
            .addCase(getDue.pending, (state, action) => {
                state.status = 'loading';
                state.error = '';
            })
            .addCase(getDue.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload;
            })
            .addCase(getDue.fulfilled, (state, action) => {
                state.status = 'resolve';
                state.error = '';
                state.data = action.payload;
                state.dataLength = action.payload.length;
            })
    },
});



export default dueSlice.reducer;