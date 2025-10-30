import GalleryPostersList from "../core/GalleryPostersList";

export const ListPreview = ({ arrayListPoster, children }) => {
  console.log("La lista de Arrays", arrayListPoster);
  return (
    <>
      <div className="list-preview-container">
        <GalleryPostersList
          /*  Aquí abajo se agrega una condicional porque así es a como puedo acceder a los array, esto va a cambiar al consumir mii API*/
          arrayListPoster={arrayListPoster?.mubis || arrayListPoster}
        ></GalleryPostersList>
        {children}
      </div>
    </>
  );
};

export default ListPreview;
