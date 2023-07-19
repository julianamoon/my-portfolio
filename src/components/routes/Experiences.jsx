// job timeline
import TimelineCard from "./features/TimelineCard";
import { experience } from "../../data";
import { styled } from "styled-components";

const Experiences = () => {
  return (
    <>
      <h2 className="page-h2">Experiences</h2>
      <Wrapper>
        {experience.map((data, idx) => {
          return <TimelineCard className="cards" key={idx} {...data} />;
        })}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  height: 350px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 500px) {
    height: auto;
    overflow: auto;
  }
`;

export default Experiences;
