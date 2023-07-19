import { styled } from "styled-components";

const TimelineCard = (data) => {
  const { job, company, role, date } = data;
  return (
    <Wrapper>
      <div className="left">
        <h3 className="primary">{job}</h3>
        <p>
          {company} / {role}
        </p>
        <p>{date}</p>
      </div>
      <div className="right">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          similique voluptas culpa explicabo autem perferendis reprehenderit
          quis dolorem excepturi, perspiciatis at rerum sequi! Hic totam in
          cumque nemo perspiciatis at.
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-left: 1px solid black;
  font-size: 0.8rem;
  padding: 10px;
  display: flex;
  gap: 5px;
  .left {
    flex-basis: 400px;
    position: relative;
    h3::before {
      content: "_";
      transform: translateX(-10px);
      position: absolute;
    }
    p {
      font-size: 0.7rem;
    }
  }
  @media (max-width: 500px) {
    flex-flow: column nowrap;
    border-left: 0;
    border-bottom: 1px solid black;
    .left {
      flex-basis: 0;
      h3::before {
        content: "";
        transform: translateX(0);
        position: relative;
      }
    }
  }
`;

export default TimelineCard;
