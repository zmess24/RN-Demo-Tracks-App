import createDataContext from './createDataContext';

const authReducer = (state, action) => {
    switch (action.type) {
        default: 
            return state;
    }
};

const signup = (dispatch) => {
    return ({ email, password }) => {
        // Make API Request to signup with email + password.

        // If we signup, modify our state, and say that we are authenticated.

        // If signup fails, we need to reflect an error message somewhere.
    };
};

const signin = (dispatch) => {
    return ({ email, password}) => {
        // Try to signin.
        // Handle success by updating state.
        // Handle failure by showing an error message (somehow).
    };
};

const signout = (dispatch) => {
    return () => {
        // somehow signout!!
    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signin, signout },
    { isSignedIn: false }
);