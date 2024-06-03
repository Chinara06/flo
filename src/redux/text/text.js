import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getText = createAsyncThunk(
    "text/etText",
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get("/text");
            if (res.status !== 200) {
                throw new Error("Server error !");
            }
            return res.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

const textSlice = createSlice({
    name: "text",
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
            .addCase(getText.pending, (state, action) => {
                state.status = 'loading';
                state.error = '';
            })
            .addCase(getText.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload;
            })
            .addCase(getText.fulfilled, (state, action) => {
                state.status = 'resolve';
                state.error = '';
                state.data = action.payload;
                state.dataLength = action.payload.length;
            })
    },
});



export default textSlice.reducer;
