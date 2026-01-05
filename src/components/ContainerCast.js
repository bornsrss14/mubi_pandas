import ItemCast from "../core/ItemCast";
import ContainerFilms from "./ContainerFilms";

export const ContainerCast = ({ itemMubi }) => {
  return (
    <div>
      <ContainerFilms>
        <div className="div-flex-cast">
          {itemMubi.cast.map((itemCast, i) => (
            <ItemCast key={i} nameProp={itemCast.name}></ItemCast>
          ))}
        </div>
      </ContainerFilms>
    </div>
  );
};

export default ContainerCast;
