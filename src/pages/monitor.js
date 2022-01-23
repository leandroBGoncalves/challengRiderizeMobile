import React from "react";
import { StatusBar, View } from "react-native";
import { Header } from "../components/Header";
import { Map } from "../components/map";
import { DescriptionsMonitor } from "../components/monitorDescritptions";

export const MonitorDefault = ({ navigation }) => {

    function ReturnHome () {
        navigation.navigate('Home')
    }

    return (
        <View style={{ flex: 1}}>
            <StatusBar 
            backgroundColor= "#ffffff"
            barStyle = "dark-content"
            />
            <Header ReturnHome={ReturnHome} />
            <Map />
            <DescriptionsMonitor />
        </View>
    )
}
