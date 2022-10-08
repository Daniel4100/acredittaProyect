import React, { useState } from "react";
import { useSelector } from "react-redux";
import FormDashBoard from "./FormDashBoard";
import Graphic from "./Graphic";
import NearEarthObjects from "./NearEarthObjects";

const Dashboard = ({ toggle, handleToggle }) => {
  // un usestate para controlar el loading
  const [loading, setLoading] = useState(true);

  //slice donde se guardan los datos de la api, los objetos cercanos a la tierra
  const nearObjects = useSelector((state) => state.datesSlice);

  //slice donde se gurada un objeto con fechas de inicio y fin
  const dates = useSelector((state) => state.datesObjSlice);

  //constante para hacer un filtro donde obtenemos los valores de los obejtos que se encuentran en el slice 
  const valuesDate =
    nearObjects && Object.values(nearObjects?.near_earth_objects);


  //en esta const se almacenan los valores de los objetos que se encuentran en el slice
  const array = [];

  //en este for se recorre el array de valores y se almacenan en la constante array
  const dateOrganized = valuesDate?.map((e, index) =>
    e.map((e) => array.push(e))
  );

  return (
    <div>
      <div className="form-container">
        <FormDashBoard
          setLoading={setLoading}
          toggle={toggle}
          handleToggle={handleToggle}
        />
      </div>
      <div className="dashboard">
        <div className="dashboard-content">
          <div className="dashboard-title">
            <h1>Dashboard</h1>
          </div>
          <article className="dates">
            <section className="dates-section">
              <span>{dates.startDate}</span>
              <p>Start Date</p>
            </section>
            <section className="dates-section">
              <span>{dates.endDate}</span>
              <p>End Date</p>
            </section>
          </article>
        </div>
        <div className="dashboard-objects">
          <div className="dashboard-objects__count">
            <article>
              <div className="circle">
                <p>{nearObjects?.element_count}</p>
              </div>

              <h4>near earth objects</h4>
            </article>
          </div>
          <div className="dashboard-objects__graphic">
            <Graphic array={array} />
          </div>
        </div>
        <div className="dashboard-objects-all">
          <div className="item">
            <span>Name</span>
            <span>close approach date</span>
            <span>diameter min - mtrs</span>
            <span>diameter max - mtrs</span>
          </div>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            valuesDate?.map((e, index) =>
              e.map((item, index) => (
                <NearEarthObjects key={index} item={item} />
              ))
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
