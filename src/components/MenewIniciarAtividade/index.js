import React from 'react';
import { Image } from "react-native";
import { 
    BtnInit,
    ContainerMenew, 
    ContentButton, 
    ContentOptionsMenew, 
    IconRigth,
    TextBtn
} from './style';

export const MenewInit = ({ InitMinitor }) => {
    return (
        <ContainerMenew>
            <ContentOptionsMenew>
                <Image source={require('../../assets/Route.png')} />
                <Image source={require('../../assets/Ride.png')} />
                <Image source={require('../../assets/Montain.png')} />
                <Image source={require('../../assets/Menew.png')} />
            </ContentOptionsMenew>
            <ContentButton>
                <BtnInit onPress={InitMinitor}>
                    <TextBtn>
                        Iniciar Atividade
                    </TextBtn>
                    <IconRigth source={require('../../assets/ArrowRigth.png')} />
                </BtnInit>
            </ContentButton>
        </ContainerMenew>
    )
}