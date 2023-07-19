import { styled } from "styled-components";
import img from "../assets/joleana.png";
import { minibio } from "../data";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Header = () => {
  return (
    <Wrapper>
      <img src={img} alt="avatar" />
      <h2>Juliana Moreira</h2>
      <p>{minibio}</p>
      <div className="line"></div>
      <div>
        <a href="https://github.com/julianamoon" rel="noreferrer">
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/juliana-moreira-7a2b5198/"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* outline: 2px solid red; */
  padding: 20px;
  height: 450px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  flex-basis: 20%;
  img {
    width: 150px;
    border-radius: 50%;
  }
  h2 {
    margin: 15px 0;
  }
  p {
    text-align: center;
    font-size: 0.9rem;
  }
  .line {
    width: 100px;
    color: black;
    height: 1px;
    border-bottom: 1px solid #d1d1d1;
    margin: 20px auto;
  }
  @media (max-width: 780px) {
    display: none;
  }
`;

export default Header;
