import { Link } from "react-router-dom";
import styled from "styled-components";
import { sideBarData } from "../../data/side-bar-data";
import { useState } from "react";
// import // HiOutlineCalendarDays,
// // HiOutlineCog6Tooth,
// {HiOutlineHome},
// // // HiOutlineHomeModern,
// // HiOutlineUsers,
// "react-icons/hi2";
// import { HiOutlineHome, HiOutlineUsers } from "react-icons/hi2";
const NavContainer = styled.nav`
  margin-top: 3rem;
`;
const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-left: 0;
  font-size: 15px;
  list-style: none;
  /* padding: 10px; */
  /* 
  &:hover {
    color: var(--color-grey-800);
    background-color: var(--color-grey-100);
    border-radius: var(--border-radius-sm);
  } */
`;
// const CategorySpan = styled.span`
/* background-color: red; */
// `;

const StyledNavLink = styled(Link)`
  padding: 10px;
  display: flex;
  /* font-weight: 800; */
  /* background-color: red; */

  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: 800;
    color: var(--color-grey-600);
    font-size: 0.3;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s;
    /* padding: 1.2rem 2.4rem; */
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-100);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 20px;
    height: 20px;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;
const UpSpan = styled.span`
  /* background-color: blue; */
  svg {
    margin-right: 0;
    width: 12px;
  }
`;
const CategorySpan = styled.span`
  /* background-color: red; */
  font-weight: 600;
`;
const ChildrenContainer = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin-left: 5px;
  font-size: 14px;
  font-weight: 500;
`;
const ChildStyledNavLink = styled(Link)`
  padding: 4px;
  display: flex;
  margin-left: 17px;
  /* font-weight: 800; */
  /* background-color: red; */

  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: 800;
    color: var(--color-grey-600);
    font-size: 0.3;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s;
    /* padding: 1.2rem 2.4rem; */
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-100);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 20px;
    height: 20px;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;
function MainNav() {
  const [isTapped, setIsTapped] = useState(false);
  // const [isNewTapped, setIsNewTapped] = useState(false);
  // const [isOtherTapped, setIsOtherTapped] = useState(false);
  const [activeCategory, setActiveCategory] = useState(false);

  const isActiveCategory = (testCategory, actualCategory) => {
    return testCategory === actualCategory && isTapped;
  };

  const categoryClickHandler = (test) => {
    setActiveCategory(test);
    console.log("activeCategory", activeCategory);
    console.log("OKAY!");
    setIsTapped(!isTapped);
    // if (activeCategory === test)
    // if (isTapped && !activeCategory === test) setIsNewTapped(true);
    // if ((isTapped || isNewTapped) && !activeCategory === test)
    // setIsOtherTapped(true);
    // console.log("activeCategory:", activeCategory);
    // console.log("isTapped:", isTapped);
  };
  return (
    <NavContainer>
      {sideBarData.map((item) => (
        <NavList key={item.id}>
          <li>
            <StyledNavLink
              to={item?.linkName}
              // onClick={() => setIsTapped(!isTapped)}
              onClick={() => categoryClickHandler(item.category)}
            >
              {item.icon}
              <CategorySpan>
                <span>{item.category}</span>
              </CategorySpan>
              <UpSpan>
                {!isActiveCategory(item.category, activeCategory)
                  ? item?.down
                  : item?.up}
              </UpSpan>
            </StyledNavLink>
            {isActiveCategory(item.category, activeCategory) && (
              <ChildrenContainer>
                {item?.children?.map((item) => (
                  <ChildStyledNavLink to={item.linkName} key={item.linkName}>
                    {item.label}
                  </ChildStyledNavLink>
                ))}
              </ChildrenContainer>
            )}
          </li>
        </NavList>
      ))}
    </NavContainer>
  );
}

export default MainNav;

// {/* <NavList>
//         <li>
//           <StyledNavLink to="dashboard">
//             <HiOutlineHome />
//             <span>Dashboard</span>
//           </StyledNavLink>
//         </li>
//         <li>
//           <StyledNavLink to="stations">
//             <HiOutlineCalendarDays />
//             <span>Stations</span>
//           </StyledNavLink>
//         </li>
//         {/* <li>
//           <StyledNavLink to="/cabins">
//             <HiOutlineHomeModern />
//             <span>Management</span>
//           </StyledNavLink>
//         </li> */}
//         <li>
//           <StyledNavLink to="users">
//             <HiOutlineUsers />
//             <span>Users</span>
//           </StyledNavLink>
//         </li>
//         <li>
//           <StyledNavLink to="customers">
//             <HiOutlineUsers />
//             <span>Customers</span>
//           </StyledNavLink>
//         </li>
//         <li>
//           <StyledNavLink to="management">
//             <HiOutlineCog6Tooth />
//             <span>Management</span>
//           </StyledNavLink>
//         </li>
//       </NavList> */}
