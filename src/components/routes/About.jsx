// brief presentation

import { styled } from "styled-components";
import {
  certifications,
  educationbio,
  softSkills,
  webdesignSkills,
  webdevSkills,
} from "../../data";

const About = () => {
  return (
    <Wrapper>
      <h2 className="page-h2">About</h2>
      <div className="left">
        <div className="bio">
          <h3>Education</h3>
          <p>{educationbio}</p>
        </div>
        <div className="certifications">
          <h3>Certifications</h3>
          <ul>
            {certifications.map(({ id, url, name }) => {
              return (
                <li key={id}>
                  <a href={url} target="_blank" rel="noreferrer">
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="right">
        <h2 className="page-h2">Technologies</h2>
        <div className="lists">
          <div className="list1">
            <h3>Web Development</h3>
            <ul>
              {webdevSkills.map(({ id, skill }) => {
                return <li key={id}>{skill}</li>;
              })}
            </ul>
          </div>
          <div className="line"></div>
          <div className="list2">
            <h3>Web Design</h3>
            <ul>
              {webdesignSkills.map(({ id, skill }) => {
                return <li key={id}>{skill}</li>;
              })}
            </ul>
          </div>
          <div className="line"></div>
          <div className="list3">
            <h3>Soft Skills</h3>
            <ul>
              {softSkills.map(({ id, skill }) => {
                return <li key={id}>{skill}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .left {
    /* outline: 2px solid red; */
    display: flex;
    gap: 30px;
    margin-bottom: 25px;
  }
  h3 {
    margin-bottom: 5px;
  }
  .bio {
    flex-basis: 68%;
    border-bottom: 1px solid #d1d1d1;
    border-right: 1px solid #d1d1d1;
  }
  .certifications {
    text-align: center;
    width: 200px;
    li {
      margin-bottom: 5px;
    }
  }
  .lists {
    display: flex;
    justify-content: space-around;
  }
  .list1,
  .list2,
  .list3 {
    text-align: center;
    flex-basis: 25%;
  }
  .line {
    width: 0.1px;
    border-right: 1px solid #d1d1d1;
  }
  @media (max-width: 920px) {
    .left {
      flex-direction: column;
    }
    .bio {
      border-right: none;
      padding-bottom: 30px;
    }
    .certifications {
      margin: 0 auto;
    }
    .lists {
      flex-flow: row wrap;
    }
    .list1,
    .list2 {
      flex-basis: auto;
    }
    .list3 {
      flex-basis: 100%;
      margin-top: 10px;
    }
    .line {
      display: none;
    }
  }
  @media (max-width: 700px) {
    .bio {
      border-bottom: none;
      padding-bottom: 0;
    }
  }
`;

export default About;
