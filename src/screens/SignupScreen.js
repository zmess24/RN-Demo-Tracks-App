import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

// React Fragment - Don't show a wrapping element when the component renders on the screen.
// Syntax: <> {elements} </>

export default SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <View style={styles.container}> 
            <Spacer>
                <Text h3>Sign Up for Tracker</Text>
            </Spacer>
            <Spacer>
                <Input 
                    label="Email"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Input 
                    secureTextEntry
                    label="Password"
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null }
                <Spacer>
                    <Button 
                        title="Sign up"
                        onPress={() => signup({ email, password })}
                    />
                </Spacer>
            </Spacer>
        </View>
    )
};

SignupScreen.navigationOptions = () => {
    return {
        // Hide Header
        header: null,
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 100
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        margin: 15
    }
});