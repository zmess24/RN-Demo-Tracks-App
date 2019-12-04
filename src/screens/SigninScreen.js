import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

export default SigninScreen = () => {
    return (
        <View style={styles.container}>
            <AuthForm
                headerText="Log In"
                errorMessage=""
                onSubmit={() => {}}
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