import ContainerCast from "../components/ContainerCast";
import ContainerCrew from "../components/ContainerCrew";
import ContainerDetails from "../components/ContainerDetails";
import ContainerGenresFilm from "../components/ContainerGenresFilm";
import ContainerRelease from "../components/ContainerRelease";

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
  { idTab: 1002, targetTab: "Dilms", linkTo: "user-films", className: "green" },
  { idTab: 1003, targetTab: "Diary", linkTo: "diary-user", className: "green" },
  {
    idTab: 1004,
    targetTab: "Deviews",
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
