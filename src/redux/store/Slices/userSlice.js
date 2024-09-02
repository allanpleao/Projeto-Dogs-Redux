import { USER_GET } from "../../../api";
import createAsyncSlice from "../helper/createAsyncSlice";
import { fetchToken, resetTokenState } from "./tokenSlice";

const userSlice = createAsyncSlice({
    name: 'user',
    fetchConfig: (token) => {
        const { url, options } = USER_GET(token)
        return {url, options}
    }
})

export const fetchUser = userSlice.asyncAction;

export const userLogin = (user) => async(dispatch) => {
    try {
        const { payload } = await dispatch(fetchToken(user));
        if(payload.token) {
            window.localStorage.setItem('token', payload.token)
            await dispatch(fetchUser(payload.token))
        } 
    } catch (error) {
        return error.message
    }
}
const { resetState: resetUserState, fetchError } = userSlice.actions;
export const userLogout = () => async(dispatch) => {
    dispatch(resetUserState());
    dispatch(resetTokenState());
    window.localStorage.removeItem('token');
}
export const autoLogin = () => async (dispatch, getState) => {
    const { token } = getState()
    console.log(token)
    if (token?.data?.token) {
        const { type } = await dispatch(fetchUser(token.data.token))
        if (type === fetchError.type) dispatch(userLogout())
    }
}
autoLogin()

export default userSlice.reducer;