import { useState } from "react";
import OverlyActions from "./OverlyActions";
import LazyImg from "../services/LazyImg";
import { Link } from "react-router-dom";

export const LinkPoster = ({
  toShowDetails = true,
  mubi,
  width,
  posterUrl,
  children,
  comentDate = "4 Aug",
}) => {
  const [showModal, setShowModal] = useState(false);
  const customHeight = (width * 3) / 2;

  const Component = toShowDetails ? Link : "div";
  // Define las props solo si es Link
  const componentProps = toShowDetails
    ? { to: `/mubi&detail/${mubi?.id}` || "tt0111771" }
    : {};
  return (
    /* Abajo le paso un id tt0111771, este es el tipo que recibe,
    pero por si las dudas llegara a perderse el id de el item de mubi, no rompa la ap  */
    <Component {...componentProps}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: `${width}rem`,
        }}
      >
        <div
          style={{
            height: `${customHeight}rem`,
            width: `${width}rem`,
          }}
          id="img-full-cover"
        >
          {/* <img className="img-full-cover" alt="img-poster" src={posterUrl} /> */}
          <LazyImg
            placeholder={
              "https://placehold.co/100x150/14132c/FFF/?text=Loading..."
            }
            alt={"img-poster"}
            src={posterUrl}
          ></LazyImg>
          <div onMouseLeave={() => setShowModal(false)}>
            <OverlyActions
              setShowModal={setShowModal}
              showModal={showModal}
            ></OverlyActions>
          </div>
        </div>
        <div style={{ width: "100%" }}>{children}</div>
      </div>
    </Component>
  );
};
export default LinkPoster;
