import { configureStore } from "@reduxjs/toolkit"
import { waitlistReducer, waitlistSlice } from "../state/waitlist.slice"

export const store = configureStore({
    reducer: {
        waitlist: waitlistReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch