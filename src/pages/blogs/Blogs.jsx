import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import { styled } from "styled-components";
import { useState } from "react";
import styles from "./Blogs.module.css";
import Chat from "../../chat/Chat";

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
  const [botActive, setBotActive] = useState(false);

  const handleBotClick = () => {
    console.log("BOT ACTIVE", botActive);
    setBotActive((prev) => !prev);
  };
  return (
    <StyledAppLayout>
      <Header />
      <SideBar />
      <Main>
        <Container>
          <Outlet />
          {botActive && (
            <div className={styles["chat_container"]}>
              <Chat setBotActive={setBotActive} />
            </div>
          )}
          <div className={styles["chat_outermost_container"]}>
            <div
              className={styles["chat_outer_container"]}
              onClick={handleBotClick}
            >
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="2em"
                width="2em"
                className={styles["bot-svg"]}
                // onClick={handleBotClick}
              >
                <path d="M6 12.5a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 004.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 01-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 013 9.219V8.062zm4.542-.827a.25.25 0 00-.217.068l-.92.9a24.767 24.767 0 01-1.871-.183.25.25 0 00-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 00.189-.071l.754-.736.847 1.71a.25.25 0 00.404.062l.932-.97a25.286 25.286 0 001.922-.188.25.25 0 00-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 00-.166.076l-.754.785-.842-1.7a.25.25 0 00-.182-.135z" />
                <path d="M8.5 1.866a1 1 0 10-1 0V3h-2A4.5 4.5 0 001 7.5V8a1 1 0 00-1 1v2a1 1 0 001 1v1a2 2 0 002 2h10a2 2 0 002-2v-1a1 1 0 001-1V9a1 1 0 00-1-1v-.5A4.5 4.5 0 0010.5 3h-2V1.866zM14 7.5V13a1 1 0 01-1 1H3a1 1 0 01-1-1V7.5A3.5 3.5 0 015.5 4h5A3.5 3.5 0 0114 7.5z" />
              </svg>
            </div>
          </div>
        </Container>
      </Main>
    </StyledAppLayout>
  );
};
