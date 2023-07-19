import { styled } from "styled-components";
import { bio } from "../../data";
import img from "../../assets/me-transparent.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Wrapper>
      <div className="left">
        <h2 className="page-h2">Hello World!</h2>
        {bio.map((text, index) => {
          return <p key={index}>{text}</p>;
        })}
        <Link to="about" className="button">
          Learn More
        </Link>
      </div>
      <div className="right">
        <img src={img} alt="me" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-flow: row nowrap;
  .left {
    /* outline: 2px solid red; */
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
  }
  p {
    padding: 0px 10px;
    margin-bottom: 10px;
  }
  img {
    width: 305px;
    transform: translateY(-15px);
  }
  @media (max-width: 920px) {
    img {
      display: none;
    }
  }
`;

export default Home;
