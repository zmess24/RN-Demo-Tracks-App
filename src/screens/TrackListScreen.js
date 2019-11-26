import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export default TrackListScreen = ({ navigation }) => {
    return (
        <>
            <Text style={{ fontSize: 48}}>TrackListScreen</Text>
            <Button
                title="Go to track detail"
                onPress={() => navigation.navigate('TrackDetail')}/>
        </>
    )
};

const styles = StyleSheet.create({});