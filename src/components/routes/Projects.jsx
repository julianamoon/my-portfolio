import { styled } from "styled-components";
import { useEffect, useState } from "react";
import { useFetchProject } from "../../fetchProjects";

const Projects = () => {
  const { loading, fetchedProjects } = useFetchProject();
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > fetchedProjects.length - 1) {
        index = 0;
      }
      return index;
    });
  };
  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = fetchedProjects.length - 1;
      }
      return index;
    });
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > fetchedProjects.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  if (loading) {
    return <p className="page-h2">Loading...</p>;
  }

  return (
    <Wrapper>
      <button className="button primary" onClick={prevSlide}>
        prev
      </button>
      <div className="project">
        {fetchedProjects.map((project, projIndex) => {
          console.log(project);
          const { id, img, url, code, title, text } = project;
          let position = "nextSlide";

          if (projIndex === index) {
            position = "activeSlide";
          }
          if (
            projIndex === index - 1 ||
            (index === 0 && projIndex === project.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <img src={img} alt={title} />
              <h3>{title}</h3>
              <p>{text}</p>
              <a className="button" href={url}>
                Live
              </a>
              `if (code !=== null) {
                return <a className="button" href={code}> Code </a> 
              }`
            </article>
          );
        })}
      </div>
      <button className="button primary" onClick={nextSlide}>
        next
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  button {
    cursor: pointer;
  }
  .project {
    width: 100%;
    height: 100%;
    text-align: center;
    position: relative;
    overflow: hidden;
    a {
      margin: 5px;
      padding: 2px 8px;
    }
    p {
      margin: 10px 30px;
    }
  }
  @media (max-width: 700px) {
    width: 90vw;
    height: 80vh;
    button {
      margin: 0 10px;
    }
  }
  @media (max-width: 500px) {
    height: auto;
    button {
      display: none;
    }
    .project {
      overflow: hidden;
    }
    article {
      margin-bottom: 30px;
    }
    img {
      width: 100%;
    }
  }
`;

export default Projects;
