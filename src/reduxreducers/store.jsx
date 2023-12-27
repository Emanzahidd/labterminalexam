import { configureStore } from '@reduxjs/toolkit'
import missionReducer from './missionSlice/mSlice.js'
import rocketReducer from './rocketSlice/rSlice.js'

const store = configureStore ({
    reducer: {
        missionSlice:  missionReducer,
        rocketSlice: rocketReducer,
    },
});

export default store;