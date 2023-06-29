import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: bottom right;
  position: relative;
  

  .overlay{
    display: flex;
    flex-direction: row;
    background:rgba(333, 444, 331, 0.8);
    gap: 15px;

    @media screen and (max-width:500px){
       flex-direction: column;
        
    }
}

`
export const NavBar = styled.nav`
    position: absolute;
    /* inset: 0 0 0 0; */
   height: 100px;
   z-index: 1;
   display: grid;
   grid-template-columns: 1fr 1fr;
    place-content: center;

   .hamburger{
     line-height: 100px;
     font-size: 2rem;
     display: flex;
     justify-content: center;
     align-items: center;
     color: #ff652f;
   }

   h1{
    font-size: 4rem;
    color: #FF652F;
    /* margin-left: 100px; */
   }
   @media (max-width: 700px){
    display: grid;
   grid-template-columns: 1fr 2fr;
    
    h1{
    font-size: 3rem;
    
    
   }
    }
  
   
`
export const Wrapper = styled.div`
   margin-top: 30px;
   margin: 30px auto 30px auto;
   /* width: 1200px; */
   display: flex;
   flex-direction: column;
   display: grid;
    place-content: center;
   

`
export const SectionInfo = styled.div`

 margin-bottom: 20px;
 height: auto;
 display: grid;
 /* margin-left: 80px; */
 /* flex-direction: row; */
 align-items: center;
 grid-template-columns: 1fr 1fr;
 gap: 20px;
 margin-top: 50px;

 @media (max-width: 800px){
    display: flex;
    /* grid-template-columns: 1fr ; */
    flex-direction: column;
    align-items: center;
    place-content: center;

    }
   
 
`
export const BoxInfo = styled.div`
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #1f2833;
    border-radius: 20px;

    .icon{
        color: #ff652f;
        font-size: 2rem;
    }

    @media (max-width: 800px){
        height: 120px;
        width: 80%;
    }

`
export const SectionInfo2 = styled.div`
 height: auto;
 padding-left: 50px;
 /* width: 100%; */
 padding-right: 20px;
 display: grid;
 grid-template-columns: 1fr 1fr 1fr;
 margin: 10px auto;
 gap: 20px;

 @media (max-width: 1000px){
    grid-template-columns: 1fr ;
}
 
`
export const BoxInfo2 = styled.div`
height: 300px;
display: flex;
flex-direction: row;
background-color: #1f2833;
border-radius: 20px;



img{
    width: 50%;
}
p{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #66fcf1;
}

`