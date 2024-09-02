import { TOKEN_POST } from "../../../api";
import createAsyncSlice from "../helper/createAsyncSlice";
import { getLocalStorage } from '../helper/getLocalStorage'
const tokenSlice = createAsyncSlice({
    name: 'token',
    initialState: {
        data: {
            token: getLocalStorage('token', null)
        }
    },
    fetchConfig: (user) => {
        const { url, options } = TOKEN_POST(user)
        return {url, options}
    }
})
export const { resetState: resetTokenState } = tokenSlice.actions;


export const fetchToken = tokenSlice.asyncAction;
export default tokenSlice.reducer;