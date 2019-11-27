import createDataContext from './createDataContext';
import trackerAPI  from '../api/tracker';

const authReducer = (state, action) => {
    switch (action.type) {
        default: 
            return state;
    }
};

const signup = dispatch => {
    return async ({ email, password }) => {
        try {
            const response = await trackerAPI.post('/signup', { email, password });
            console.log(response.data);
        } catch (err) {
            console.log(err.message);
        };  
    };
    console.log("@")
};

const signin = dispatch => {
    return ({ email, password}) => {
        // Try to signin.
        // Handle success by updating state.
        // Handle failure by showing an error message (somehow).
    };
};

const signout = dispatch => {
    return () => {
        // somehow signout!!
    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signin, signout },
    { isSignedIn: false }
);