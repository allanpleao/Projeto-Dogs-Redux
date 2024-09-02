import { createSlice } from "@reduxjs/toolkit";
import { PHOTO_GET, PHOTOS_GET } from "../../../api";

const photoSlice = createSlice({
    name: 'photo',
    initialState: {
        loading: false,
        data: null,
        error: null,

    },
    reducers: {
        fetchPhotoStarted: (state) => {
            state.loading = true;
        },
        fetchPhotoSuccess: (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        },
        fetchPhotoError: (state, action) => {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
        },

    }
})
export const { fetchPhotoError, fetchPhotoStarted, fetchPhotoSuccess } = photoSlice.actions;

export const fetchPhoto = (payload) => async (dispatch) => {
    try {
        dispatch(fetchPhotoStarted())
        const { url, options } = PHOTO_GET(payload)
        const response = await fetch(url, options)
        if(!response.ok) {
            const errorMessage = await response.text();
            throw new Error(errorMessage || 'Error while fetching photos')
        }
        console.log('response:', response)
        const data = await response.json();
        console.log('data retrieved:', data);
        return dispatch(fetchPhotoSuccess(data))
    } catch (error) {
        return dispatch(fetchPhotoError(error.message))
    }
}

export default photoSlice.reducer;

