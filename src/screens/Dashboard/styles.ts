import styled from "styled-components/native";

export const Container = styled.View`
   flex: 1;
`;

export const Header = styled.View`
    width: 100%;
    background-color: #8257E5;
    padding: 30px 20px 70px 20px;
`;

export const Head = styled.View`
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;


`;

export const Logo = styled.Text`
    color: #FFFFFF;
    font-weight: bold;
    font-size: 35px;
`;

export const Text = styled.Text`
    color: #FFFFFF;
    font-size: 15px;
 `;

 export const TextSpan = styled.Text`
    color: #FFFFFF;
    font-size: 15px;
    font-weight: bold;
 `;

 export const TextInput = styled.TextInput`
    background-color: #FFFFFF;
    margin-top: -30px;
    height: 56px;
    padding: 10px 40px;
    border: solid 1px #E5E5E5;
    border-top-right-radius: 0px;
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 0px;
    color: #666666;
 `;
 
 export const TasksView = styled.View`
    height: 100%;
    background-color: #E5E5E5;
`;
 export const ButtonInput = styled.TouchableOpacity`
    background-color: #FFFFFF;
    margin-top: -30px;
    height: 56px;
    justify-content: center;
    padding: 10px;
    border: solid 1px #E5E5E5;
    border-top-right-radius: 7px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 7px;
`;
 export const ViewInput = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center ;
    justify-content: center;
    margin-bottom: 20px;
 `;

 export const TitleButton = styled.Text`
    color: #B2B2B2;
 `;
