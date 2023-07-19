// cute image + 404 error + link back home
import { Link } from "react-router-dom";
import img from "../../assets/witchey.png";
import { styled } from "styled-components";

const Error = () => {
  return (
    <Wrapper>
      <img src={img} alt="witch having trouble flying" />
      <h2 className="page-h2">Oops! Something went wrong!</h2>
      <p>There&apos;s nothing here to look. You must be lost.</p>
      <Link className="button" to="/">
        Take me back
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  img {
    width: 80%;
  }
  @media (max-width: 920px) {
    img {
      width: 100%;
    }
  }
`;

export default Error;
