import { links } from "../data";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavbarLinks = () => {
  return (
    <Wrapper>
      <ul>
        {links.map(({ id, name, icon, url }) => {
          return (
            <li key={id}>
              <NavLink className="links" to={url}>
                {icon}
                <span>{name}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  /* outline: 2px solid red; */
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px 20px;
  flex-basis: 10%;
  ul {
    display: flex;
    flex-flow: column nowrap;
    gap: 0.5rem;
    align-items: flex-start;
    list-style: none;
  }
  .links {
    text-decoration: none;
    display: flex;
    gap: 0.5rem;
    justify-content: baseline;
    align-items: center;
  }
  .active {
    font-weight: 700;
  }
  span {
    font-size: 0.8rem;
    color: black;
  }
  @media (max-width: 700px) {
    ul {
      flex-flow: row nowrap;
    }
  }
  @media (max-width: 500px) {
    span {
      display: none;
    }
  }
`;

export default NavbarLinks;
