import { arrayFirstList } from "../storage/posterGridList";
import GalleryPostersList from "./GalleryPostersList";

const MyListItem = ({ arrayListPoster = arrayFirstList }) => {
  return (
    <div>
      <GalleryPostersList
        arrayListPoster={arrayListPoster}
      ></GalleryPostersList>
    </div>
  );
};

export default MyListItem;
