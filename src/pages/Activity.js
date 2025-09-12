import ContainerFilms from "../components/ContainerFilms";
import SubNabvar from "../components/SubNabvar";
import InlineNav from "../core/InlineNav";

export const Activity = () => {
  return (
    <>
      <SubNabvar></SubNabvar>
      <div>
        <InlineNav></InlineNav>
        <ContainerFilms>
          <p>no films yet</p>
        </ContainerFilms>
      </div>
    </>
  );
};
export default Activity;
