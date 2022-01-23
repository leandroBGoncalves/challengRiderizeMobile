import React from 'react';
import { Image, Text, TouchableOpacity, View } from "react-native";
import { 
    BtnInit,
    ContainerMenew, 
    ContentButton, 
    ContentOptionsMenew, 
    IconRigth,
    TextBtn
} from './style';

export const MenewInit = () => {
    return (
        <ContainerMenew>
            <ContentOptionsMenew>
                <Image source={require('../../assets/Route.png')} />
                <Image source={require('../../assets/Ride.png')} />
                <Image source={require('../../assets/Montain.png')} />
                <Image source={require('../../assets/Menew.png')} />
            </ContentOptionsMenew>
            <ContentButton>
                <BtnInit>
                    <TextBtn>
                        Iniciar Atividade
                    </TextBtn>
                    <IconRigth source={require('../../assets/ArrowRigth.png')} />
                </BtnInit>
            </ContentButton>
        </ContainerMenew>
    )
}