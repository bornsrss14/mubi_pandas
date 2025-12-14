import ContainerFilms from "../components/ContainerFilms";
import InlineNav from "../core/InlineNav";
import { arrayTabsSubNavbar } from "../storage/kindOfTabs";

export const Activity = () => {
  return (
    <>
      <div style={{ marginTop: "2rem", border: "solid red 3px" }}>
        <InlineNav arrayTabs={arrayTabsSubNavbar}></InlineNav>
        <ContainerFilms>
          <p>no films yet</p>
        </ContainerFilms>
      </div>
    </>
  );
};
export default Activity;
