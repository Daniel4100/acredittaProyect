import React from "react";
import { useSelector } from "react-redux";
import CardPhoto from "./CardPhoto";
import Form from "./Form";

const Galery = ({ toggle, handleToggle }) => {
  //slice donde se guardan las fotos de la api
  const photos = useSelector((state) => state.photosSlice);


  return (
    <div>
      <div className="form-container">
        {/* //componente de formulario */}
        <Form toggle={toggle} handleToggle={handleToggle} />
      </div>
      <div className="photos-container">
         {/* desplegamos las fotos */}
        {photos?.length > 0 ? (
          photos?.map((photo, index) => <CardPhoto key={index} photo={photo} />)
        ) : (
          <h1>intenta con otra fecha</h1>
        )}
      </div>
    </div>
  );
};

export default Galery;
