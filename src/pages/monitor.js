import React from "react";
import { View } from "react-native";
import { Header } from "../components/Header";
import { Map } from "../components/map";
import { DescriptionsMonitor } from "../components/monitorDescritptions";

const MonitorDefault = () => {
    return (
        <View style={{ flex: 1}}>
            <Header />
            <Map />
            <DescriptionsMonitor />
        </View>
    )
}

export default MonitorDefault