import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { GoChevronRight } from "react-icons/go";

const PageNavigation = ( {title} ) => {
  return (
    <Wrapper>
        <NavLink to="/"> Home </NavLink>
        <GoChevronRight className="right-icon" />
        <NavLink to="/products"> Products </NavLink>
        <GoChevronRight className="right-icon" />
        {title}
    </Wrapper>
  )
};

const Wrapper = styled.section`
  padding: 1rem 0 3rem 0;
  /* background-color: ${({ theme }) => theme.colors.bg}; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.8rem;
  text-transform: capitalize;

  a {
    font-size: 1.8rem;
    text-transform: capitalize;
  }

  .right-icon {
    color: grey;
  }

`;

export default PageNavigation;