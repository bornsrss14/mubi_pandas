import { arrayThirdList } from "../storage/posterGridList";
import FooterListPreview from "./FooterListPreview";
import ListPreview from "./ListPreview";

const ContainerSharedLists = () => {
  return (
    <div>
      <ListPreview arrayListPoster={arrayThirdList}>
        <FooterListPreview></FooterListPreview>
        {/* children */}
      </ListPreview>
    </div>
  );
};

export default ContainerSharedLists;
