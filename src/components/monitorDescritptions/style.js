import styled from 'styled-components';

export const ContainerDescriptionMonitor = styled.View`
    width: 100%;
    height: 360px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 8px 16px 16px 16px;
`;

export const BarraPush = styled.View`
    width: 20%;
    height: 4px;
    background: #000000;
    border-radius: 4px;
    opacity: 0.5;
`;

export const TimeMonitor = styled.Text`
    font-family: sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 64px;
    line-height: 72px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
    margin-top: 25px;
`;

export const TimeMonitorTitle = styled.Text`
    font-family: sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
    margin-top: 25px;
`;

export const DoubleInfo = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 25px;
    margin-top: 35px;
`;

export const DistanceBox = styled.View`
    width: 50%;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-family: sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    text-align: center;
    color: #000000;
    opacity: 0.6;
`;

export const NumberBox = styled.Text`
    font-family: sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    color: #000000;
    margin-top: 10px;
`;

export const BtnStop = styled.TouchableOpacity`
    width: 90%;
    height: 48px;
    background: transparent;
    border: 1px solid #FF2525;
    border-radius: 48px;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;

export const TextBtnStop = styled.Text`
        font-family: sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        color: #FF2525;
`;