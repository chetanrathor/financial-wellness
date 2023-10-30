import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { get, post } from "../api/index";
import { AxiosError } from "axios"
import { ApiResponse, addEnquiry } from "../types";


export const addNewEnquiry = createAsyncThunk('crm/add_new_enquiry', async (data:addEnquiry, { rejectWithValue }) => {

    try {
        const response = await post('', data)
        return response.data
    } catch (error: any) {
        return rejectWithValue(error.response.data)
    }


})

export const fetchWaitlist = createAsyncThunk('crm/humanResourceId', async ( data,{ rejectWithValue }) => {

    try {
        const response = await get<{},ApiResponse>('')
        return response.data
    } catch (error) {
        throw rejectWithValue(error)
    }


})


export const waitlistSlice = createSlice({
    name: 'crm/slice',
    initialState: { waitlist: new Array(), },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchWaitlist.fulfilled, (state, { payload }) => {

            return { ...state, waitlist: payload.data }
        })
    }
})

export const waitlistReducer = waitlistSlice.reducer
export const { } = waitlistSlice.actions