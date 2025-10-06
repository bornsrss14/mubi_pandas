import ListPreview from "../components/ListPreview";
import { arrayFirstList } from "../storage/posterGridList";
import GalleryPostersList from "./GalleryPostersList";
import PosterMovie from "./PosterMovie";

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
