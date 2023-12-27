import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';

export const fetchMission = createAsyncThunk('fetchMission', async () => {
    const response = await axios.get(url);
    return response.data;
});

export const initialState = {
    data: [],       
    isLoading: false, 
    isError: false, 
};

const Mission = createSlice({
    name: 'missionSlice',
    initialState,
    reducers: {

    joinMissionReducer: (state, action) => {
        const { missionIdToJoin, reserved } = action.payload;
        return {

        ...state,
        data: state.data.map((mission) => mission.mission_id === missionIdToJoin
        ? { ...mission, reserved: !reserved }
        : mission
        ),
        };
    },
    },

    extraReducers: (builder) => {
    builder
        .addCase(fetchMission.pending, (state) => ({
        ...state,
        isLoading: true,
        }))

        .addCase(fetchMission.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        data: action.payload,
        }))

        .addCase(fetchMission.rejected, (state) => ({
        ...state,
        isLoading: false,
        isError: true,
        }));
    },
});

export const { joinMissionReducer } = Mission.actions;
export default Mission.reducer;

