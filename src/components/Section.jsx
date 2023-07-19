import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Section = () => {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* outline: 2px solid red; */
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px;
  flex-basis: 55%;
  height: 450px;
  @media (max-width: 920px) {
    border: none;
    border-left: 1px solid black;
    border-radius: 0;
  }
  @media (max-width: 780px) {
    border-left: none;
  }
  @media (max-width: 500px) {
    height: 100%;
  }
`;

export default Section;
