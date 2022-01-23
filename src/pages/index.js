import React, { useEffect, useState } from 'react';

import { Platform, Text, View } from 'react-native';
import { Header } from '../components/Header';
import { Map } from '../components/map';
import { MenewInit } from '../components/MenewIniciarAtividade';

const App = () => {



    return (
        <View style={{flex: 1}}>
            <Header />
            <Map />
            <MenewInit />
        </View>
    )
}

export default App