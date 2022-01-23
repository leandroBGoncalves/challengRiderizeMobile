import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { 
    IconReturn, 
    ContainerHeader, 
    TitleHeader 
} from './style';

export const Header = ({ ReturnHome }) => {
    return (
        <ContainerHeader>
            <TouchableOpacity onPress={ReturnHome}>
                <IconReturn source={require('../../assets/Return.png')} />
            </TouchableOpacity>           
            <TitleHeader>
                Pedalada
            </TitleHeader>
            <IconReturn source={require('../../assets/Gear.png')} />
        </ContainerHeader>
    )
}