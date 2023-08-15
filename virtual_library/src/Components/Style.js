import styled from 'styled-components';
// import background from './../Assets/KNUST.jpeg';
import { Link } from 'react-router-dom';

export const colors = {
    primary: "#fff",
    theme: "#BE185D",
    light1: "#F3F4F6",
    light2: "#E5E7EB",
    dark1: "#1F2937",
    dark2: "#4B5563",
    dark3: "#9CA3AF",
    red: "#DC2626"

}

export const StyledContainer = styled.div`
    margin: 0;
    padding-top: 30px;
    min-height:100vh;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    /* background: linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://th.bing.com/th/id/OIP.m_8yGJPbQ_G0r5X7Yx_JeQHaE8?pid=ImgDet&rs=1'); */
    background: linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://mcf.knust.edu.gh/wp-content/uploads/2023/07/Best-University-in-the-World-KNUST.jpg');
    background-size: 100% 100%;
    background-attachment: fixed; 

    @media screen and (max-width:450px){
        overflow:hidden;
        
    }
`;

export const StyledTitle = styled.h2`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color ? props.color : colors.primary};
    padding: 5px;
    margin-bottom: 20px;
    position: relative;
`;

export const StyledSubTitle = styled.p`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: white;
    padding: 5px;
    margin-bottom: 25px;
`;

export const Avatar = styled.div`
    width: 55px;
    height: 55px;
    border-radius: 50px;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center; 
`;

export const StyledButton = styled(Link)`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 3px solid ${colors.primary};
    border-radius: 25px;
    color: ${(props) => props.color ? props.color : colors.primary};
    text-decoration: none;
    text-align: center;
    transition: ease-in-out 0.3s;
    outline: 0;


    &:hover{
        background-color: ${colors.primary};
        color: ${colors.theme};
        cursor: pointer;
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 25px;
`;

export const StyledTextInput = styled.input`
    width: 330px;
    padding: 15px;
    padding-left: 50px;
    padding-right: 50px;
    font-size: 17px;
    letter-spacing: 1px;
    color: ${colors.dark1};
    background-color: ${colors.light2};
    border: 0;
    outline: 0;
    display: block;
    margin: 5px auto 10px auto;
    transition: ease-in-out 0.3s;
    
    ${(props) => props.invalid && `background-color: ${colors.red}; color: ${colors.primary};`}

    &:focus{
        background-color: ${colors.dark2};
        color: ${colors.primary};
    }
`;

export const StyledSelect = styled.select`
    width: 330px;
    padding: 15px;
    padding-left: 50px;
    font-size: 17px;
    letter-spacing: 1px;
    color: ${colors.dark1};
    background-color: ${colors.light2};
    border: 0;
    outline: 0;
    display: block;
    margin: 5px auto 10px auto;
    transition: ease-in-out 0.3s;
    
    ${(props) => props.invalid && `background-color: ${colors.red}; color: ${colors.primary};`}

    &:focus{
        background-color: ${colors.dark2};
        color: ${colors.primary};
    }
`;

export const StyledLabel = styled.p`
    text-align: left;
    font-size: 13px;
    font-weight: bold
`;

export const StyledFormArea = styled.div`
    text-align: center;
    padding: 45px 55px;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.2);
    /* background:yellow; */
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
`;

export const StyledFormButton = styled.button`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 2px solid white;
    border-radius: 25px;
    color: black;
    transition: ease-in-out 0.3s;
    outline: 0; 


    &:hover{
        background-color: white;
        color: black;
        cursor: pointer;
    }
`;

export const Erromsg = styled.div`
    font-size: 11px;
    color: ${colors.red};
    margin-top: -5px;
    margin-bottom: 10px;
    text-align: left;
`;

export const ExtraText = styled.p`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: black;
    padding: 2px;
    margin-top: 10px;

`;

export const ExtraTexts = styled.p`
    display: flex;
    gap: 10px;
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: black;
    padding: 2px;
    margin-top: 10px;
    text-decoration: none;
    transition: ease-in-out 0.3s;

    &:hover{
        cursor: pointer;
        text-decoration: underline;
        font-weight: bold;  
    }

`;

export const TextLink = styled(Link)`
    text-decoration: none;
    color: darkblue;
    font-weight: bold;
    transition: ease-in-out 0.3s;

    &:hover{
        text-decoration: underline;
        letter-spacing: 1px;
        font-weight: bold;
    }

`;

export const StyledIcon = styled.p`
    color: ${colors.dark1};
    position: absolute;
    font-size: 21px;
    top: 45px;
    ${(props) => props.right && `right: 15px; `}
    ${(props) => !props.right && `left: 15px;`}

`;

export const CopyrightText = styled.p`
    padding: 5px;
    margin: 20px;
    text-align: center;
    color: ${colors.light2};
`;