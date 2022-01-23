import React from 'react';

import { StatusBar, View } from 'react-native';
import { Header } from '../components/Header';
import { Map } from '../components/map';
import { MenewInit } from '../components/MenewIniciarAtividade';

export const Home = ({ navigation }) => {

    function InitMinitor() {
        navigation.navigate('Monitor')
    }

    return (
        <View style={{flex: 1}}>
            <StatusBar 
            backgroundColor= "#ffffff"
            barStyle = "dark-content"
            />
            <Header />
            <Map />
            <MenewInit InitMinitor={InitMinitor}/>
        </View>
    )
}