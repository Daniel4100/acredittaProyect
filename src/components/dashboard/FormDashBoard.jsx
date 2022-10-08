import axios from "axios";
import React, { useEffect} from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getDates } from "../../store/slices/dates.slice";
import { getDatesObj } from "../../store/slices/datesObj.slice";

const FormDashBoard = ({ setLoading, toggle, handleToggle }) => {

  // use react-hook-form, es una libreia para formulario
  const { handleSubmit, register, reset } = useForm();

  // use dispatch para enviar la accion o despacharla
  const dispatch = useDispatch();

  // slice que almacana un objeto de las fechas egresadas por el usuario
  const dates = useSelector((state) => state.datesObjSlice);


  useEffect(() => {
    //confirmamos si existe y hacemos la llamada para evitar errores
    if (dates) {
      const APY_KEY = "HEAMhFLFKDWRjDUAxLegH8G8hrx7zUyUZ0qyjz31";
      const URL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${dates?.startDate}&end_date=${dates?.endDate}&api_key=${APY_KEY}`;
      axios
        .get(URL)
        .then((res) => {
          // console.log(res.data)
          setLoading(false);
          //almacenamos en el slice los datos recibidos de la api con getDates que es un action
          dispatch(getDates(res.data));
        })
        .catch((err) => console.log(err));
    }
  }, [dates]);


  //funcion que se ejecuta al enviar el formulario y atrapa los datos del mismo
  const onSubmit = (data) => {
    setLoading(true);
    console.log(data);
    dispatch(getDatesObj(data));
  };
  console.log(dates);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {toggle ? null : (
        <button onClick={handleToggle}>
          <img src="./images/icons/menu.svg" alt="" />
        </button>
      )}
      <input
        type="date"
        name="start_date"
        placeholder="start date"
        {...register("startDate")}
      />
      <input
        type="date"
        name="end_date"
        placeholder="end date"
        {...register("endDate")}
      />
      <button type="submit">
        <img src="./images/icons/search.svg" alt="" />
      </button>
      <span>1 - 7 max range days</span>
    </form>
  );
};

export default FormDashBoard;
