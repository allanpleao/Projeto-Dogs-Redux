// importa o createSlice
import { createSlice } from "@reduxjs/toolkit";

const createAsyncSlice = (config) => {
  const slice = createSlice({
    name: config.name,

    initialState: {
      loading: false,
      data: null,
      error: null,
      ...config.initialState,
    },

    reducers: {
      fetchStarted(state) {
        state.loading = true;
      },
      fetchSuccess(state, action) {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      },
      fetchError(state, action) {
        state.loading = false;
        state.data = null;
        state.error = action.payload;
      },
      resetState: (state) => {
        state.loading = false;
        state.data = null;
        state.error = null;
      },

      ...config.reducers,
    },
  });

  const { fetchStarted, fetchSuccess, fetchError } = slice.actions;

  const asyncAction = (payload) => async (dispatch) => {
    try {
      dispatch(fetchStarted());

      const { url, options } = config.fetchConfig(payload);
      const response = await fetch(url, options);
      console.log('response', response)
      if (!response.ok){
        const errorMessage = await response.text();
        throw new Error(errorMessage, 'Error while fetching data')
      } 
      const data = await response.json();
      return dispatch(fetchSuccess(data));
    } catch (error) {
      return dispatch(fetchError(error.message));
    }
  };

  return { ...slice, asyncAction };
};

export default createAsyncSlice;
