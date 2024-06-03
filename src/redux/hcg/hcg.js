import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getHcg = createAsyncThunk(
    "hcg/getHcg",
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get("/hcg");
            if (res.status !== 200) {
                throw new Error("Server error !");
            }
            return res.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);
const hcgSlice = createSlice({
    name: "hcg",
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
            .addCase(getHcg.pending, (state, action) => {
                state.status = 'loading';
                state.error = '';
            })
            .addCase(getHcg.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload;
            })
            .addCase(getHcg.fulfilled, (state, action) => {
                state.status = 'resolve';
                state.error = '';
                state.data = action.payload;
                state.dataLength = action.payload.length;
            })
    },
});



export default hcgSlice.reducer;
