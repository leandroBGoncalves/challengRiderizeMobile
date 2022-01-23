import styled from 'styled-components';

export const ContainerHeader = styled.View` 
    height: 60px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 13px 20px;
    background: #ffffff;
`;

export const IconReturn = styled.Image`
    width: 20px;
`;

export const TitleHeader = styled.Text`
    font-family: sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    color: #000000;
`;