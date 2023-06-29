import styled from "styled-components";
import { Link } from "react-router-dom";



export const SidebarBox = styled.div`
   @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600&display=swap');

    min-width: 80px;
    background-color: #1f2833;
    min-height: 100vh;
    margin-right: 10px;
    font-family: 'Nunito', sans-serif;
    overflow: hidden;
    transition: all 0.5s;
    /* position: fixed; */

    /* @media (max-width: 1000px){
        width: 70px !important;
    } */

    @media screen and (max-width:500px){
        min-height: 80px;
        width: 100%;
        display:flex;
        flex-direction: column;
        align-items: center;
        
        
    }
`
export const NavBar = styled.nav`

   height: 100px;

   .hamburger{
     line-height: 100px;
     font-size: 2rem;
     display: flex;
     justify-content: center;
     align-items: center;
   }
  
   
`
export const SidebarProfileIcon = styled.div`
   margin-top: 50px;
   margin-bottom: 20px;
    height: 200px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
   

    .Profile{
        border-radius: 50%;
        background-color: #66fcf1;
        width: 150px;
        height: 150px;
        
    }
`
export const SidebarMenu = styled.div`
    
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width:500px){
        flex-direction: row;
        
    }
    .icon{
        /* width: 60px; */
        /* padding-right:10px; */
        
    }

    .icon, .title{
        font-size: 20px;
       
    }
  
    
   
`
export const NavLink = styled(Link)`
      
     color: #ff652f;
     margin-top: 30px;
    display: flex;
    padding: 5px 5px;
    /* gap: 2px; */
    transition: all 0.5s;
    cursor: pointer;
    text-decoration: none;

    @media screen and (max-width:500px){
        padding-right: 50px;
        margin-top: 20px;
        
    }
    
    /* &:hover{
      color: #ff652f;
      background:white;
     transition: all 0.5s;
      
    } */

    &:active{
        color: #ff652f;
        background-color: white;
    

    }
`

