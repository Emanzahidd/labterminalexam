import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v4/rockets';

export const initialState = {
    rockets: [],
};

export const getRockets = createAsyncThunk('getRockets', async () => {
    const response = await axios.get(url);
    return response.data;
}
);

const rocketSlice = createSlice({
    name: 'rockets',
    initialState,
    reducers: {

        reserveBooking: (state, action) => {
            const { id } = action.payload;
            state.rockets = state.rockets.map((rocket) =>
            rocket.id !== id ? rocket : { ...rocket, reserved: true }
        );
        },

        cancelBooking: (state, action) => {
            const { id } = action.payload;
            state.rockets = state.rockets.map((rocket) =>
            rocket.id !== id ? rocket : { ...rocket, reserved: false }
        );
        },
    },

    extraReducers: (builder) => {
    builder.addCase(getRockets.fulfilled, (state, action) => {
        state.rockets = action.payload;
    });
    },
});


export const { reserveBooking, cancelBooking } = rocketSlice.actions;
export default rocketSlice.reducer;
