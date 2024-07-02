import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const postContact = createAsyncThunk(
    "contact/postContact",
    async (contacts, { rejectWithValue }) => {
        try {
            const res = await axios.post("/contact",contacts);
            if (res.status !== 200) {
                throw new Error("Server error !");
            }
            return res.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);
export const getContact = createAsyncThunk(
    "contact/getContact",
    async (contacts, { rejectWithValue }) => {
        try {
            const res = await axios("/contact");
            if (res.status !== 200) {
                throw new Error("Server error !");
            }
            return res.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);
const contactSlice = createSlice({
    name: "contact",
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
            .addCase(postContact.pending, (state, action) => {
                state.status = 'loading';
                state.error = '';
            })
            .addCase(postContact.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload;
            })
            .addCase(postContact.fulfilled, (state, action) => {
                state.status = 'resolve';
                state.error = '';
                state.data = [...state.date,action.payload];
                state.dataLength = action.payload.length;
            })
            .addCase(getContact.pending, (state, action) => {
                state.status = 'loading';
                state.error = '';
            })
            .addCase(getContact.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload;
            })
            .addCase(getContact.fulfilled, (state, action) => {
                state.status = 'resolve';
                state.error = '';
                state.data = action.payload;
                state.dataLength = action.payload.length;
            })
    },
});



export default contactSlice.reducer;
