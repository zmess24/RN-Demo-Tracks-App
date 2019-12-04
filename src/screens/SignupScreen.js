import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

export default SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);
    
    return (
        <View style={styles.container}> 
            <AuthForm 
                headerText="Create Account"
                errorMessage={state.errorMessage}
                submitText="Create Acount"
                onSubmit={signup}
            />
            <NavLink 
                text="Already have an account? Sign in instead."
                routeName="Signin"
            />
        </View>
    )
};

SignupScreen.navigationOptions = () => {
    return {
        header: null, // Hide Header
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 100
    }
});