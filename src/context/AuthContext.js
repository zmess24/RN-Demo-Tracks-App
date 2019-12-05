import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerAPI  from '../api/tracker';
import { navigate } from '../navigationRef';

/**
|--------------------------------------------------
| Reducer
|--------------------------------------------------
*/

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signin':
            return { errorMessage: '', token: action.payload };
        case 'clear_err_message':
            return { ...state, errorMessage: '' }; 
        default: 
            return state;
    }
};

/**
|--------------------------------------------------
| Action Functions
|--------------------------------------------------
*/

const clearErrorMessage = dispatch => () => dispatch({ type: 'clear_err_message' });

const signup = dispatch => async ({ email, password }) => {
    try {
        const response = await trackerAPI.post('/signup', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });
    
        navigate('TrackList')
    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign up.' })
    };  
};

const signin = dispatch => async ({ email, password}) => {
    try {
        const response = await trackerAPI.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });

        navigate('TrackList')
    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Incorrect username or password' })
    };
};

const signout = dispatch => {
    return () => {
        // somehow signout!!
    };
};

/**
|--------------------------------------------------
| Exports
|--------------------------------------------------
*/

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signin, signout, clearErrorMessage },
    { token: null, errorMessage: '' }
);