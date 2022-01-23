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
    const [counterTime, setCounterTime] = useState(0);
    const [initTime, setInitTime] = useState(false);

    function Counter() {
        setInterval(() => {
            if (initTime) {
                let time = counterTime
                setCounterTime(time + 0.1)
            }
            }, 100)
    }

    return (
        <ContainerDescriptionMonitor>
            <BarraPush>
                {/*Barrinha de puxar*/}
            </BarraPush>
            <TimeMonitorTitle>
                Tempo
            </TimeMonitorTitle>
            <TimeMonitor>
                {counterTime.toFixed(1)}
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