import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import { styled } from "styled-components";

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 2rem 2rem 3rem;
  overflow: scroll;
`;
const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 11rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Container = styled.div`
  /* max-width: 120rem; */
  margin: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const Blogs = () => {
  return (
    <StyledAppLayout>
      <Header />
      <SideBar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
};
