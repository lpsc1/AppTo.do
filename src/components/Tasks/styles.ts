import styled from "styled-components/native";

interface Props{
    isActive: boolean;
}

export const Container = styled.View<Props>`
    width: 100%;
    flex-direction: row;
    align-items: center;
    padding: 15px;
    background-color:${({isActive}) => isActive ?  '#E9E9E9' : '#E5E5E5'};
    justify-content: space-between;
`;
export const TaskText = styled.Text<Props>`
    font-size: 16px;
    font-weight: 500;
    color:${({isActive}) => isActive ?  '#666666' : '#1DB863'};
    text-decoration-line: ${({isActive}) => isActive ?  'none' : 'line-through'};
`;
export const Button = styled.TouchableOpacity`
    fill: green;
`;
export const TrashStyle = styled.View`
`;
