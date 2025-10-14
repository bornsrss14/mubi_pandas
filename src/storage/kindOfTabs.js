import ContainerBlocked from "../components/ContainerBlocked";
import ContainerCast from "../components/ContainerCast";
import ContainerCrew from "../components/ContainerCrew";
import ContainerDetails from "../components/ContainerDetails";
import ContainerFollowers from "../components/ContainerFollowers";
import ContainerFollowing from "../components/ContainerFollowing";
import ContainerGenresFilm from "../components/ContainerGenresFilm";
import ContainerMyLists from "../components/ContainerMyLists";
import ContainerRelease from "../components/ContainerRelease";
import ContainerSharedLists from "../components/ContainerSharedLists";

export const arrayTabsMubiPage = [
  {
    idTab: 1001,
    targetTab: "cast",
    className: "green",
  },
  {
    idTab: 1002,
    targetTab: "crew",
    className: "green",
  },
  {
    idTab: 1003,
    targetTab: "details",
    className: "green",
  },
  {
    idTab: 1004,
    targetTab: "genres",
    className: "green",
  },
  { idTab: 1005, targetTab: "releases", className: "green" },
];
{
  /* ------------------------------------------------------------------------------------------------------------------------ */
}
export const arrayTabsNetwork = [
  {
    idTab: 1001,
    targetTab: "following",
    className: "green",
  },
  {
    idTab: 1002,
    targetTab: "followers",
    className: "green",
  },
  {
    idTab: 1003,
    targetTab: "blocked",
    className: "green",
  },
];

export const arrayTabsList = [
  {
    idTab: 1001,
    targetTab: "your lists",
    className: "green",
  },
  {
    idTab: 1002,
    targetTab: "Shared with you",
    className: "green",
  },
];
{
  /* ---------------------------------------------- */
}

export const arrayTabsActivity = [
  { idTab: 1001, targetTab: "friends", className: "green" },
  { id: 1002, targetTab: "you", className: "green" },
  { id: 1003, targetTab: "incoming", className: "green" },
];
export const arrayTabsSubNavbar = [
  {
    idTab: 1001,
    targetTab: "Activity",
    linkTo: "activity-user",
    className: "green",
  },
  { idTab: 1002, targetTab: "Films", linkTo: "user-films", className: "green" },
  { idTab: 1003, targetTab: "Diary", linkTo: "diary-user", className: "green" },
  {
    idTab: 1004,
    targetTab: "Reviews",
    linkTo: "reviews-user",
    className: "green",
  },
  {
    idTab: 1005,
    targetTab: "Watchlist",
    linkTo: "watchlist",
    className: "green",
  },
  {
    idTab: 1006,
    targetTab: "Lists",
    linkTo: "listsNavbar",
    className: "green",
  },
  { idTab: 1007, targetTab: "Likes", linkTo: "likes-user", className: "green" },
  { idTab: 1008, targetTab: "Network", linkTo: "network", className: "green" },
];

export const DataProjects = [
  {
    id: 1001,
    componente: ContainerCast,
  },
  {
    id: 1002,
    componente: ContainerCrew,
  },
  {
    id: 1003,
    componente: ContainerDetails,
  },
  {
    id: 1004,
    componente: ContainerGenresFilm,
  },
  {
    id: 1005,
    componente: ContainerRelease,
  },
];

export const DataProjectNetwork = [
  { id: 1001, componente: ContainerFollowers },
  { id: 1002, componente: ContainerFollowing },
  { id: 1003, componente: ContainerBlocked },
];

export const DataProjectsList = [
  { id: 1001, componente: ContainerMyLists },
  { id: 1002, componente: ContainerSharedLists },
];

export const FiltersArrayItems = [
  {
    idTab: 1001,
    targetTab: "Sort by RELEASE DATE",
    className: "green",
  },
  {
    idTab: 1002,
    targetTab: "Service",
  },
  {
    idTab: 1003,
    targetTab: "Genre",
  },

  {
    idTab: 1004,
    targetTab: "Decade",
  },
  {
    idTab: 1005,
    targetTab: "Rating",
  },
];

export const FilterReview = [
  {
    idTab: 1001,
    targetTab: "Sort by WHEN REVIEWED",
  },
  {
    idTab: 1002,
    targetTab: "DIARY YEAR",
  },
  {
    idTab: 1003,
    targetTab: "RATING",
  },
];

export const FilterList = [
  {
    idTab: 1001,
    targetTab: "Sort by WHEN UPDATED",
  },
  {
    idTab: 1002,
    targetTab: "ALL",
  },
];

export const FilterFolowed = [
  {
    idTab: 1001,
    targetTab: "This week",
  },
  {
    idTab: 1002,
    targetTab: "This month",
  },
  {
    idTab: 1003,
    targetTab: "This Year",
  },
  {
    idTab: 1004,
    targetTab: "Past years",
  },
];

export const FilterDiary = [
  {
    idTab: 1001,
    targetTab: "Service",
  },
  {
    idTab: 1002,
    targetTab: "Genre",
  },
  {
    idTab: 1003,
    targetTab: "Decade",
  },
  {
    idTab: 1004,
    targetTab: "Diary year",
  },
  {
    idTab: 1005,
    targetTab: "Rating",
  },
];

export const FilterWatchList = [
  {
    idTab: 1001,
    targetTab: "Service",
  },
  {
    idTab: 1001,
    targetTab: "Genre",
  },
  {
    idTab: 1003,
    targetTab: "Year",
  },
];

{
  /* EL siguiente array contiene las cuatro películas favoritas seleccionadas */
}
export const FourMubis = [
  "https://upload.wikimedia.org/wikipedia/en/2/23/IsleOfDogsFirstLook.jpg",
  "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Grand_Budapest_Hotel.png",
  "https://upload.wikimedia.org/wikipedia/en/d/d5/Hotel_Rwanda_movie.jpg",
  ,
];

export const following = [
  "https://media.licdn.com/dms/image/v2/D5603AQGpTl6JKHXebA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1713467554316?e=2147483647&v=beta&t=coXEFaSP9J3dz1B-os5gh3G31PkEcUZWYsG32O8aTEY",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq2LmZp_6bl-ZtAPvjiTBC0f99okAJvGWr_pR8vzHjFMcMNLwwLe9hWz4FFrTM8mycV9M&usqp=CAU",
  "https://media.licdn.com/dms/image/v2/D5603AQHzD4JSTWJrjw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1727902754352?e=2147483647&v=beta&t=MJNLF1UyW0g20pIbZIoHOpAs4lD4S9ZauLLnvk-XCUs",
  "https://media.licdn.com/dms/image/v2/C4E03AQG9fdqENNDEhw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1594674124785?e=2147483647&v=beta&t=ET8dADHcVa8ChLABHgctsaiyWbHsjAG58WEMFNYF8OA",
  "https://media.licdn.com/dms/image/v2/C4E03AQHpgksgZsPEhQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1586876456174?e=2147483647&v=beta&t=IVK-dFO-rUuHV5gNMAPsh5S21lkvuM6u7UAsLBYgGOY",
  "https://media.licdn.com/dms/image/v2/D4E03AQFnaaPcQ9NxJQ/profile-displayphoto-shrink_200_200/B4EZdRJllDHcAc-/0/1749413161211?e=2147483647&v=beta&t=LElnllXDZZv3a7p00pU6Jv0jxiRnT2pM0f5LKpP3bxc",
  "https://i.pinimg.com/280x280_RS/c8/d2/86/c8d286b87a487f2d0d60971cd2e70f20.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7h61PSH-P509FjEAUtFE527Fh_wG3-ptjpQ&s",
  "https://media.licdn.com/dms/image/v2/C4D03AQFSS0XNrehT-A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1612459426768?e=2147483647&v=beta&t=Zw7hQWV5npYlZDRwEVHBJlJb43YX6YEXZQr7-ixnBTE",
  "https://media.licdn.com/dms/image/v2/D4D03AQGsqNOqaFNCaw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1722711852887?e=2147483647&v=beta&t=PIhbHX6Tass7i3gSNJUth_kUBEC4AcHialq6b63wUEU",
  "https://www.photostudio308.com/wp-content/uploads/2022/01/IMG_2164-683x1024.jpg",
];
