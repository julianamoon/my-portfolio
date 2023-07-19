import { styled } from "styled-components";
import Header from "./components/Header";
import NavbarLinks from "./components/NavbarLinks";
import Section from "./components/Section";

function App() {
  return (
    <Wrapper>
      <NavbarLinks />
      <Header />
      <Section />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media (max-width: 920px) {
    overflow: auto;
  }
  @media (max-width: 700px) {
    flex-flow: column;
  }
`;

export default App;
