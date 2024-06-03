import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getTeam = createAsyncThunk(
    "team/getTeam",
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get("/team");
            if (res.status !== 200) {
                throw new Error("Server error !");
            }
            return res.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

export const getSearchTeam = createAsyncThunk(
    "team/getSearchTeam",
    async (name, { rejectWithValue }) => {
        try {
            const res = await axios.get(`/team?name_like=${name}`);
            if (res.status !== 200) {
                throw new Error("Server error !");
            }
            return res.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);
export const getOnePerson= createAsyncThunk(
    "team/getOnePerson",
    async (id, { rejectWithValue }) => {
        try {
            const res = await axios.get(`/team/${id}`);
            if (res.status !== 200) {
                throw new Error("Server error !");
            }
            return res.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

const teamSlice = createSlice({
    name: "team",
    initialState: {
        data:[],
        onePerson:{},
        status: "",
        dataSearch:[],
        error:"",
        dataLength:0,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getTeam.pending, (state, action) => {
                state.status = 'loading';
                state.error = '';
            })
            .addCase(getTeam.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload;
            })
            .addCase(getTeam.fulfilled, (state, action) => {
                state.status = 'resolve';
                state.error = '';
                state.data = action.payload;
                state.dataLength = action.payload.length;
            })
            .addCase(getOnePerson.pending, (state, action) => {
                state.status = 'loading';
                state.error = '';
            })
            .addCase(getOnePerson.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload;
            })
            .addCase(getOnePerson.fulfilled, (state, action) => {
                state.status = 'resolve';
                state.error = '';
                state.onePerson = action.payload;
            })
            .addCase(getSearchTeam.pending, (state, action) => {
                state.status = 'loading';
                state.error = '';
            })
            .addCase(getSearchTeam.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload;
            })
            .addCase(getSearchTeam.fulfilled, (state, action) => {
                state.status = 'resolve';
                state.error = '';
                state.dataSearch = action.payload;
            });
    },
});



export default teamSlice.reducer;
