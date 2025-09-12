import ItemCast from "../core/ItemCast";
import ContainerFilms from "./ContainerFilms";

export const ContainerCast = () => {
  return (
    <div>
      <ContainerFilms>
        <div className="div-flex-cast">
          <ItemCast nameProp={"James McAvoy"}></ItemCast>
          <ItemCast nameProp={"Anya Taylor-Joy"}></ItemCast>
          <ItemCast nameProp={"Jessica Saula"}></ItemCast>
          <ItemCast nameProp={"Kash Goins"}></ItemCast>
          <ItemCast nameProp={"Anna Oh"}></ItemCast>
          <ItemCast nameProp={"Jessica Chainstains"}></ItemCast>
          <ItemCast nameProp={"J.R. Lee"}></ItemCast>
        </div>
      </ContainerFilms>
    </div>
  );
};

export default ContainerCast;
