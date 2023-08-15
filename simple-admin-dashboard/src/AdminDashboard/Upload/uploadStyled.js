import styled from "styled-components";
import Admin from "../../Images/up.svg";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${Admin});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: bottom right;

  .overlay {
    display: flex;
    flex-direction: row;
    background: rgba(333, 444, 331, 0.8);

    @media screen and (max-width: 500px) {
      flex-direction: column;
    }
  }
`;
export const Wrapper = styled.div`
  margin: 20px auto 20px auto;
  /* width: 1200px; */
  display: flex;
  flex-direction: column;
  display: grid;
  place-content: center;
  /* margin-left: 400px; */

  .Logo {
    display: grid;
    place-content: center;
  }
`;
export const NavBar = styled.nav`
  position: absolute;
  /* inset: 0 0 0 0; */
  height: 100px;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;

  .hamburger {
    line-height: 100px;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ff652f;
    margin-left: 7px;
    margin-top: 7px;
  }

  h1 {
    font-size: 4rem;
    color: #ff652f;
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 3rem;
    }
  }
`;
export const InputContainer = styled.div`
  margin-bottom: 15px;
  display: grid;
  place-content: center;
`;

export const InputLabel = styled.label`
  color: #ff652f;
`;
export const InputField = styled.input`
  width: 500px;
  border-radius: 10px;
  border: none;
  outline: none;
  height: 28px;
  border: 2px solid rgba(0, 0, 0, 0.5);
  /* text-align: center; */

  @media (max-width: 700px) {
    width: 250px;
  }
`;
export const InputSelect = styled.select`
  width: 500px;
  border-radius: 10px;
  border: none;
  outline: none;
  height: 34px;
  border: 2px solid rgba(0, 0, 0, 0.5);
  text-align: center;
  background-color: white;

  @media (max-width: 700px) {
    width: 250px;
  }
`;
export const InputFile = styled.input`
  background-color: #a9fdf8;
`;
export const UploadButton = styled.button`
  border-radius: 10px;
  width: 400px;
  padding: 10px;
  background-color: #ff652f;
  border: none;
  color: white;
  font-size: 1rem;

  &:hover {
    scale: 1.2;
  }

  @media (max-width: 700px) {
    width: 200px;
  }
`;
