import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getMore = createAsyncThunk(
    "more/getMore",
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get("/more");
            if (res.status !== 200) {
                throw new Error("Server error !");
            }
            return res.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);
export const getOneMore = createAsyncThunk(
    "more/getOneMore",
    async (id, { rejectWithValue }) => {
        try {
            const res = await axios.get(`/more/${id}`);
            if (res.status !== 200) {
                throw new Error("Server error !");
            }
            return res.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

const moreSlice = createSlice({
    name: "more",
    initialState: {
        data:[],
        oneMore: {},
        status: "",
        error:"",
        dataLength:0,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getMore.pending, (state, action) => {
                state.status = 'loading';
                state.error = '';
            })
            .addCase(getMore.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload;
            })
            .addCase(getMore.fulfilled, (state, action) => {
                state.status = 'resolve';
                state.error = '';
                state.data = action.payload;
                state.dataLength = action.payload.length;
            })
            .addCase(getOneMore.pending, (state, action) => {
                state.status = 'loading';
                state.error = '';
            })
            .addCase(getOneMore.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload;
            })
            .addCase(getOneMore.fulfilled, (state, action) => {
                state.status = 'resolve';
                state.error = '';
                state.oneMore = action.payload;
            })
    },
});



export default moreSlice.reducer;
