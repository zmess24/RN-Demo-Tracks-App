import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerAPI  from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'signup_error':
            return { ...state, errorMessage: action.payload };
        case 'signup':
            return { errorMessage: '', token: action.payload }
        default: 
            return state;
    }
};

const signup = dispatch => async ({ email, password }) => {
    try {
        const response = await trackerAPI.post('/signup', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signup', payload: response.data.token });

        navigate('TrackList')
    } catch (err) {
        dispatch({ type: 'signup_error', payload: 'Something went wrong with sign up.' })
    };  
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
    { token: null, errorMessage: '' }
);