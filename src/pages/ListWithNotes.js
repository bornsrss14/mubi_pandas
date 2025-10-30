import { useParams } from "react-router-dom";
import FilterMovies from "../components/FilterMovies";
import ProfilePicUsername from "../core/ProfilePicUsername";
import { DataMyLists, DataNotesRelatedLists } from "../storage/tempMovieData";
import { formatDate } from "../utils/dateUtils";
import ContainerFilms from "../components/ContainerFilms";
import LinkPoster from "../core/LinkPoster";

const ListWithNotes = () => {
  const { id } = useParams();
  const itemLista = DataMyLists.find((item) => item._id === Number(id));
  const matchingNotes = DataNotesRelatedLists.filter(
    (itemNote) =>
      itemNote.list === Number(id) &&
      itemLista.mubis.some((mubiItem) => mubiItem.id === itemNote.id_mubi)
  );

  /* const note = matchingNotes.map((itemNote) => itemNote.id_mubi === ); */

  if (!itemLista) {
    return <div>Lista no encontrada</div>;
  }
  return (
    <div>
      <div className="section-persentage">
        <div className="basic-flex-row">
          <ProfilePicUsername
            imgProfile={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSiBzbuoRXqXqixKnB5vRM2M5QNA-aNXwYGFy-tI0x-FIecdIniU5240RIV5-6PPw3tSw&usqp=CAU"
            }
            withNickname={false}
            measure="2rem"
          ></ProfilePicUsername>
          <p>
            List by <strong> bornsrss</strong>
          </p>
        </div>
        <FilterMovies
          extraFilters={true}
          subtitle={`Created ${formatDate(itemLista.createdAt)}`}
        ></FilterMovies>

        <section className="sub-header-list">
          <p className="title-list">{itemLista.title}</p>
          <p className="desc-list">{itemLista.description}</p>
        </section>
      </div>

      <ContainerFilms>
        {itemLista?.mubis.map((itemMubi) => (
          <div className="note-view">
            <LinkPoster posterUrl={itemMubi.posterUrl} width={"7"}></LinkPoster>
            <div>
              <p className="title-list">{itemMubi.title}</p>
              <p className="desc-list">{itemMubi.year}</p>

              {matchingNotes
                .filter((itemNote) => itemNote.id_mubi === itemMubi.id)
                .map((itemNote) => (
                  <p className="desc-list" key={itemNote.id_item}>
                    {itemNote.note}
                  </p>
                ))}
            </div>
          </div>
        ))}
      </ContainerFilms>
    </div>
  );
};
export default ListWithNotes;
