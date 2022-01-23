import styled from 'styled-components';

export const ContainerMenew = styled.View` 
    height: 130px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ContentOptionsMenew = styled.View` 
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px 35px;
`;

export const ContentButton = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0 16px 16px 16px;
`;

export const IconRigth = styled.Image`
    width: 16px;
    height: 16px;
`;

export const BtnInit = styled.TouchableOpacity`
    width: 95%;
    height: 48px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #0564FF;
    border: none;
    border-radius: 48px;
    padding: 0 30px;    
`;

export const TextBtn = styled.Text`
    font-family: sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #ffffff;
`;