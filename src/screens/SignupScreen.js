import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

export default SignupScreen = ({ navigation }) => {
    return (
        <> 
            <Spacer>
                <Text h3>Sign Up for Tracker</Text>
            </Spacer>
            <Spacer>
                <Input label="Email"/>
                <Input label="Password"/>
                <Button title="Sign up"/>
            </Spacer>
        </>
    )
};

const styles = StyleSheet.create({});