import React from 'react';
import { View, Image, Text } from "react-native";

import { 
    IconReturn, 
    ContainerHeader, 
    TitleHeader 
} from './style';

export const Header = () => {
    return (
        <ContainerHeader>
            <IconReturn source={require('../../assets/Return.png')} />
            <TitleHeader>
                Pedalada
            </TitleHeader>
            <IconReturn source={require('../../assets/Gear.png')} />
        </ContainerHeader>
    )
}