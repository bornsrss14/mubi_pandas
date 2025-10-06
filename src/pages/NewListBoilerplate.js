import React from "react";
import TagElement from "../core/TagElement";
import ContainerFilms from "../components/ContainerFilms";
import ListItemListed from "../core/ListItemListed";

const NewListBoilerplate = () => {
  return (
    <div className="section-persentage">
      <TagElement txt={"New List"}></TagElement>
      <main>
        <form className="form-settings" onSubmit={"handleSubmit"} noValidate>
          <div className="field username-row">
            <label htmlFor="username"> 🟢 Header</label>
            <input
              id="username"
              name="userName"
              type="text"
              value={""} /* se almacena en el draft de nueva lista*/
              readOnly
            />
          </div>
          <div className="field" style={{ maxWidth: "320px" }}>
            <label htmlFor="visibility">Who can view</label>
            <select id="visibility" name="visibility" onChange={""} value={""}>
              <option>Anyone - Public list</option>
              <option> Anyone with share link</option>
              <option> Friends (people you follow) with share link</option>
              <option>Only you</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="description">Description</label>
            <textarea className="txt-area-settings"></textarea>
          </div>
          {/*Apartir de aquí se agrega lo de la busqueda de películas */}
          <div>
            {" "}
            <p>Add a film</p>
          </div>
          {/* este va a tener las películas que se agreguen a la lista */}
          <ContainerFilms>
            <ListItemListed></ListItemListed>
          </ContainerFilms>
        </form>
      </main>
    </div>
  );
};

export default NewListBoilerplate;
