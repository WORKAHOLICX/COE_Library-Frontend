import styled from "styled-components";
import Female from "../Images/female.png"
import ProfileIcon from "../../Discussion forum/Comments/Profile-icon.png";
import Tutorimg from "../Images/Profiling.svg"


export const HeaderContainer = styled.div`
    height: 500px;
    width: 100vw;
    background-color: #FFA177FF;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 700px){
        height: auto;
        display: grid;
        grid-template-columns: 1fr;
        
    }
`
export const HeaderLeft = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    @media (max-width: 700px){
        height: 250px;
        
    }
`
export const HeaderRight = styled.div`
    width: 50%;
    background-image: url(${Tutorimg});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

    /* img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    } */

    @media (max-width: 700px){
        height: 300px;
        width: 100%; 
        
    }
`
export const HeaderButton = styled.button`
    padding: 10px;
    width: 100px;
    border-radius: 10px;
    background-color: #fef1dc;
    font-size: 1rem;

    &:hover{
        cursor: pointer;
        scale: 1.5;
    }
`

export const BodyContainer = styled.div`
    width: 100%;
    height: 100%;
`
export const BodyWrapper = styled.div`
    margin: 100px auto;
    width: auto;
    height: auto;
    /* background-color: #dff1ed; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


  @media (max-width: 700px){
    width: 80%;
    height: auto;
  }
`
export const BodyCard = styled.div`
  height: 300px;
  margin: 40px 0;
  width: 80%;
  color: #FFA177FF;
  background-color: #fef1dc;
  box-shadow: 3px 4px 8px black;
  position: relative;
  display: flex;
  grid-template-columns: 1fr 1fr;
  border-radius: 20px;
  overflow: hidden;

  @media (max-width: 700px){
    height: auto;
    display: grid;
    grid-template-columns: 1fr;
  }
  
`

export const CardLeft = styled.div`
  width: 50%;
  height: 100%;
  display: grid;
  
  @media (max-width: 700px){
    width: 100%;
    height: 200px;
    overflow: hidden;
  }
  

`
export const Image = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  margin-top: 20px;
  background-image: url(${ProfileIcon});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  /* img{
            width: 100%;
             height: 100%;
            object-fit: contain;
        } */
  
  @media (max-width: 700px){
    width: 100%;
    height: 200px;
    
  }
`

export const CardRight = styled.div`


 @media (max-width: 700px){
    height: auto;
    margin: 10px 0;
     width: 100%;
    display: grid;
    place-content: center;
  }
`