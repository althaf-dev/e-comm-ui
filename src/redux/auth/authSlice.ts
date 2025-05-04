import { createSlice } from '@reduxjs/toolkit';

interface UserContext {
    accessToken: string;
    user: {
        username:string,
        profile:string
    }
}

interface AuthState {
    loading: boolean;
    error: string | null;
    data: UserContext;
}

const initialState = {
    loading: false,
    error: null,
    data: {
        accessToken: '',
        user: {
            username:"",
            profile:""
        }
    },
};

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        loginRequest: (state: AuthState, _action) => {
            state.loading = true;
        },
        loginSuccess: (state: AuthState, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        loginFailure: (state: AuthState, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        signupRequest: (state: AuthState, _action) => {
            state.loading = true;
        },
        signupSuccess: (state: AuthState, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        signupFailure: (state: AuthState, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logoutReq: (state: AuthState) => {
            state.loading = true;
        },
        logoutSuccess: (state: AuthState) => {
            state.data = {
                accessToken: '',
                user: {
                    username:"",
                    profile:""
                }
            };
            state.loading = false;
            state.error = null;
        },
        refreshRequest: (state: AuthState) => {
            state.loading = true;
        },
        refreshSuccess: (state: AuthState, action) => {
            state.loading = false;
            state.data = action.payload;
        },
    },
});

export const {
    loginRequest,
    loginSuccess,
    loginFailure,
    signupRequest,
    signupSuccess,
    signupFailure,
    logoutReq,
    logoutSuccess,
    refreshRequest,
    refreshSuccess,
} = authSlice.actions;
export default authSlice.reducer;
