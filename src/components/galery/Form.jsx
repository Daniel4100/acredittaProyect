import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { getPhotos } from "../../store/slices/photos.slice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getPhotoData } from "../../store/slices/photosData.slice";

const Form = ({ toggle, handleToggle }) => {
  // use react-hook-form, es una libreia para formulario
  const { register, handleSubmit, reset } = useForm();

  // use dispatch para enviar la accion o despacharla
  const dispatch = useDispatch();

  // slice que almacana un objeto de las fechas egresadas por el usuario
  const data = useSelector((state) => state.photosDataSlice);

  // funcion que atrapa los datos del formulario
  const onSubmit = (data) => {
    dispatch(getPhotoData(data));
    reset();
  };

  useEffect(() => {
    const APY_KEY = "HEAMhFLFKDWRjDUAxLegH8G8hrx7zUyUZ0qyjz31";
    const URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/${data?.roverName}/photos?earth_date=${data?.fecha}&camera=${data?.camaraName}&api_key=${APY_KEY}`;
    axios
      .get(URL)
      .then((res) => {
        console.log(res.data);
        // se despacha la funcion que trae los datos de la api
        dispatch(getPhotos(res.data.photos));
      })
      .catch((err) => console.log(err));
  }, [data]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {toggle ? (
        ""
      ) : (
        <button onClick={handleToggle}>
          <img src="./images/icons/menu.svg" alt="" />
        </button>
      )}
      <input type="date" placeholder="fecha" {...register("fecha")} />
      <input
        type="text"
        list="camera"
        placeholder="nombre de la camara"
        {...register("camaraName")}
      />
      <datalist id="camera">
        <option value="FHAZ" />
        <option value="RHAZ" />
        <option value="MAST" />
        <option value="CHEMCAM" />
        <option value="MAHLI" />
        <option value="MARDI" />
        <option value="NAVCAM" />
        <option value="PANCAM" />
        <option value="MINITES" />
      </datalist>
      <input
        type="text"
        list="rover"
        placeholder="nombre del rover"
        {...register("roverName")}
      />
      <datalist id="rover">
        <option value="curiosity" />
        <option value="opportunity" />
        <option value="spirit" />
      </datalist>
      <button>
        <img src="./images/icons/search.svg" alt="" />
      </button>
    </form>
  );
};

export default Form;
