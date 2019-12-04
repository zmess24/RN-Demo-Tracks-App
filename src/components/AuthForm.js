import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native'
import { Text, Button, Input } from 'react-native-elements';
import Spacer from './Spacer';

// React Fragment - Don't show a wrapping element when the component renders on the screen.
// Syntax: <> {elements} </>

export default AuthForm = ({ headerText, errorMessage, onSubmit, submitText }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Spacer>
                <Text h3>{headerText}</Text>
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
                {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null }
                <Spacer>
                    <Button 
                        title={submitText}
                        onPress={() => onSubmit({ email, password })}
                    />
                </Spacer>
            </Spacer>
        </>
    )
};

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        margin: 15
    }
});
