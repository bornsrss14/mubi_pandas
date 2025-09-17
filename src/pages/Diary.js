import ContainerFilms from "../components/ContainerFilms";
import FilterMovies from "../components/FilterMovies";
import DiaryItem from "../core/DiaryItem";

import { FilterDiary } from "../storage/kindOfTabs";

export const Diary = () => {
  return (
    <>
      <FilterMovies arrayFilters={FilterDiary}></FilterMovies>
      <ContainerFilms>
        <p>Aquí solo van las reviews que hice</p>
        <DiaryItem
          posterUrl={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_aDf1n2mPGGo-P_2h_wx9TGharRVu4B26FA&s"
          }
          titleUrl={"Moonlight"}
        ></DiaryItem>
        <DiaryItem
          posterUrl={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR10Cpn74D2oYep0LmYVYgtGcizobppkmmPZg&s"
          }
          titleUrl={"Spiderman across the spider verse "}
        ></DiaryItem>
        <DiaryItem
          posterUrl={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGYuEKrtXqTZ-q1qwtv8hP33D9iQd972qNGA&s"
          }
          titleUrl={"Vertigo "}
        ></DiaryItem>
      </ContainerFilms>
    </>
  );
};

export default Diary;
