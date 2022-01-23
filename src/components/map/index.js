import React, { useEffect, useState } from "react";
import MapView, {
    PROVIDER_GOOGLE,
    Marker,
  } from "react-native-maps";

import { requestMultiple, PERMISSIONS } from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import { Platform } from 'react-native';

export const Map = () => {
    const [errorMsg, setErrorMsg] = useState(null);
    const [region, setRegion] = useState(null);

    useEffect(() => {
        (async function loadinhPosition() {
            const result = requestMultiple(
                [
                  PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
                  PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION
                ]).then(
                  (statuses) => {
                    const statusFine = statuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION];
                    const statusBack = statuses[PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION]; 

                    if (Platform.Version < 29) {
                        if (statusFine == 'granted') {
                            return true;
                          } else {
                            setErrorMsg('Usuário não aceitou solicitação de uso do GPS');
                          }
                    }
                    if (statusFine == 'granted' && statusBack == 'granted') {
                        return true;
                      } else {
                        setErrorMsg('Usuário não aceitou solicitação de uso do GPS');
                      }
                    },
                  );
            if (result) {
        await Geolocation.getCurrentPosition(
            ({ coords }) => {
                setRegion({
                    latitude: coords.latitude,
                    longitude: coords.longitude,
                  });
                }, (error) => {
                    setErrorMsg('Não foi possível obter a localização');
                },{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, showLocationDialog: true } 
            )}
            })() 
    }, [])

    const coordinate = {
        latitude : -20.392954, 
        longitude : -54.610248,
    }

    return (
        <MapView
        provider = { PROVIDER_GOOGLE }
        style={{ flex: 1}}
        showsMyLocationButton
        initialRegion={{
            latitude : -20.392954, 
            longitude : -54.610248, 
            latitudeDelta : 0.015 , 
            longitudeDelta: 0.0121 , 
            ...region
        }}
        showsUserLocation
        loadingEnabled
        >
        </MapView>
    )
}