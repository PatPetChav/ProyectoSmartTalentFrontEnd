//Importando Hooks
import { useState, useEffect } from "react";
//Importando de firestore
import { getApplicants, getQualifications } from "../service/firestore";
// Importando Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
// Importando SASS
import "./../styles/component/cardsDashboard.scss";

const CardsDash = (props) => {
  // Inicializando el chartData para el apexchart
  const [dataCards, setDataCards] = useState(null);

  // Obteniendo la base de datos tblPostulantes
  const fetchApplicants = async () => {
    const data = await getApplicants();
    return data;
  };

  // Obteniendo la base de datos tblCalificacion
  const fetchQualifications = async () => {
    const data = await getQualifications();
    return data;
    // console.log(data)
  };

  const map = async () => {
    const applicants = await fetchApplicants();
    const qualifications = await fetchQualifications();

    const applicantsLength = await applicants.length;
    console.log('applicants ',applicants );
    console.log('applicantsLength ',applicantsLength );

    const qualificationApproving = await qualifications.filter((qualification) => (+qualification.calif_academica + +qualification.calif_laboral + +qualification.calif_psicologica) > 140 ).map((a)=>a.id_postulante).length;
    console.log('qualificationApproving',qualificationApproving);

    const data = {
      numero_postulantes: applicantsLength,
      numero_postulantes_aprobados: qualificationApproving,
    };

    setDataCards(data);
  };

  useEffect(() => {
    map();
  }, []);

  return (
    <div className='dashboard__cards'> 
      <div className="cardDash">
        <div className="cardDash__container">
          <div className="cardDash--icon uno">
            <FontAwesomeIcon icon={faUser} className="icon--card" />
          </div>

          {dataCards && (
            <div className="cardDash--description">
              <p>N° de Postulantes</p>
              <h3>{dataCards.numero_postulantes}</h3>
            </div>
          )}
        </div>
      </div>

      <div className="cardDash">
        <div className="cardDash__container">
          <div className="cardDash--icon dos">
            <FontAwesomeIcon icon={faUser} className="icon--card" />
          </div>
          
          {dataCards && (
            <div className="cardDash--description">
              <p>N° de Postulantes aceptados</p>
              <h3>{dataCards.numero_postulantes_aprobados}</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardsDash;
