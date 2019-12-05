import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';

export default SigninScreen = () => {
    const { state, signin } = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <AuthForm
                headerText="Log In"
                errorMessage={state.errorMessage}
                onSubmit={signin}
                submitText="Log In"
            />
            <NavLink 
                text="Don't have an account? Sign up instead."
                routeName="Signup"
            />
        </View>
    )
};

SigninScreen.navigationOptions = () => {
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