import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-paper'

export default function Profile({navigation, route}) {
    return (
        <View style={styles.container}>
            <Text variant='displayLarge'>Profile</Text>
            <Button 
            mode='contained'
                onPress={() => navigation.navigate('Posts')}
            >Ir para Posts</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})