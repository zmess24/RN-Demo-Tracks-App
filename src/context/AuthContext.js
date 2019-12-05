import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerAPI  from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signin':
            return { errorMessage: '', token: action.payload }
        default: 
            return state;
    }
};

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

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signin, signout },
    { token: null, errorMessage: '' }
);