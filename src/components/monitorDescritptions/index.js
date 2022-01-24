import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { 
    BarraPush, 
    BtnStop, 
    ContainerDescriptionMonitor, 
    DistanceBox, 
    DoubleInfo, 
    NumberBox, 
    TextBtnStop, 
    TimeMonitor, 
    TimeMonitorTitle, 
    Title
} from "./style";

export const DescriptionsMonitor = () => {
    

    return (
        <ContainerDescriptionMonitor>
            <BarraPush>
                {/*Barrinha de puxar*/}
            </BarraPush>
            <TimeMonitorTitle>
                Tempo
            </TimeMonitorTitle>
            <TimeMonitor>
                00:00:01
            </TimeMonitor>
            <DoubleInfo>
                <DistanceBox>
                    <Title>Distancia</Title>
                    <NumberBox>00:00:02</NumberBox>
                </DistanceBox>
                <DistanceBox>
                    <Title>velocidade (km/h)</Title>
                    <NumberBox>31.1</NumberBox>
                </DistanceBox>
            </DoubleInfo>
            <BtnStop onPress={Counter}>
                <TextBtnStop>
                    Parar
                </TextBtnStop>
            </BtnStop>
        </ContainerDescriptionMonitor>
    )
}
