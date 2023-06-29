import styled from "styled-components";
// import Admin from "../Images/Admin-pana.svg"
import Admin from "../../Images/Admin-pana.svg"


export const Container = styled.div`
        /* width: 100vw; */
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow-y: hidden;
        background-image: url(${Admin});
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: bottom right;
            

            .overlay{
    display: flex;
  flex-direction: row;
   background:rgba(333, 444, 331, 0.8);
  }

`
export const Wrapper = styled.div`
        width: 60vw;
        height: 60vh;
        display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;

       h2{
        color: #FF652F;
       }

   @media (max-width: 700px){
    width: 100vw;
        height: 100vh;
    }
`
export const InputContainer = styled.div`
    margin-top: 20px; 
    margin-bottom: 30px;
    display: grid;
    place-content: center;

   
   
`
export const InputLabel = styled.label`
  color: #FF652F;
`
export const InputField = styled.input`
  width: 350px;
  border-radius: 10px;
  border: none;
  outline: none;
  height: 28px;
  border: 2px solid rgba(0,0,0,0.5);
  /* text-align: center; */
  padding-left:20px;
  padding-right:40px;

  @media (max-width: 700px){
    width: 250px;
    }

`
export const LoginButton = styled.button`
   border-radius: 10px;
   width: 400px;
   padding: 10px;
   background-color: #FF652F;
   border: none;
   color: white;
   font-size: 1rem;
   margin-bottom: 30px;

   &:hover{
    scale: 1.2;
   }

   @media (max-width: 700px){
    width: 200px;
    }

`