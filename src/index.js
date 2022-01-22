import React from 'react';
import MapView from 'react-native-maps';

import { Text, View } from 'react-native';

const App = () => {
    return (
        <View style={{flex: 1}}>
            <MapView 
                style={{ flex: 1 }}
                region={{
                    latitude: -20.391619,
                    longitude: -54.611002,
                    latitudeDelta: 0.0143,
                    longitudeDelta: 0.0134,
                }}
                showsUserLocation
                loadingEnabled
            />
        </View>
    )
}

export default App