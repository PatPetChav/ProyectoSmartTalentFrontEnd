//Importando Hooks
import { useState, useEffect, useContext } from "react";
//Importando de firestore
import { getApplicants, getAnnouncements, getQualifications, getAcademics, getPsychological, getLabor } from "../../service/firestore";
// Importando Componente
import { ButtonModal } from "./../../components/Modal/ButtonModal";
// Importando Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// Importando material
import {
  Grid,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Slider,
} from "@mui/material";
// Importando estilos
import "./../../styles/page/tables.scss";
import { getPostulante } from "../../service/postulanteServices";
import { getCardsHome } from "../../service/cardsHomeServices";
import { getCalificacion } from "../../service/calificacionServices";
import { getAcademico } from "../../service/academicoServices";
import { getPsicologico } from "../../service/psicologicoServices";
import { getLaboral } from "../../service/laboral.Services";


const Tables = () => {
  // Para utilizarlo con la base de datos tblPostulantes
  const [ applicants, setApplicants ] = useState([]);
  // Para utilizarlo con la base de datos tblConvocatoria
  const [ announcements, setAnnouncements ] = useState([]);
  // Para utilizarlo con la base de datos tblCalificaciones
  const [ qualifications, setQualifications ] = useState([]);
  // Para utilizar con la base de datos tbAcademics
  const [ academics, setAcademics ] = useState([]);
  // Para utilizar la base de datos de psicologico
  const [ psycho, setPsycho ] = useState([]);
  // Para utilizaar la base de datos de laboral.
  const [ trabajo, setTrabajo ] = useState([]);

  // Obteniendo la base de datos tblPostulantes
  const fetchApplicants = async () => {
    const data = await getPostulante();
    if(data.ok){
      setApplicants(data.content);
    }
    // console.log("applicants",applicants);
  };

  // Obteniendo la base de datos tblConvocatoria
  const fetchAnnouncements = async () => {
    const data = await getCardsHome();
    if(data.ok){
      setAnnouncements(data.content);
    }
    // console.log(data)
  };

  // Obteniendo la base de datos tblCalificacion
  const fetchQualifications = async () => {
    const data = await getCalificacion();
    if(data.ok){
      setQualifications(data.content);
    }
    // console.log(data)
  };

  // Obtner la base de datos tbAcademico
  const fetchAcademics = async() => {
    const data = await getAcademico();
    if(data.ok){
      setAcademics(data.content);
    }
  }

  //Obtener la base de datos de tbPsicologico
  const fetchPsycho = async() => {
    const data = await getPsicologico();
    if(data.ok){
      setPsycho(data.content);
    }
  }

  //Obtener la base de datos de tbLaboral
  const fetchLabor = async() => {
    const data = await getLaboral();
    if(data.ok){
      setTrabajo(data.content);
    }
  }

  //Inicializando los fetch
  useEffect(() => {
    fetchApplicants();
    fetchAnnouncements();
    fetchQualifications();
    fetchAcademics();
    fetchPsycho();
    fetchLabor();
  }, []);

  return (
    <div className="tables">
      {/* <Grid container >
        <Grid item > */}
      <div className="table-title">
        <h3>Tabla de Postulantes</h3>
      </div>
      <TableContainer component={Paper}>
        {/* sx={{ maxWidth: '100%', background: "rgb(32, 41, 64)" }} */}
        <Table role="table" aria-label="simple table" sx={{ width: '100%' }}>
          <TableHead>
            <TableRow>
              <TableCell
                style={{ fontSize: "1.4rem", color: "rgb(123, 128, 154)" }}
              >
                Nombre
              </TableCell>

              <TableCell
                align="right"
                style={{ fontSize: "1.4rem", color: "rgb(123, 128, 154)" }}
              >
                Apellido
              </TableCell>

              <TableCell
                align="right"
                style={{ fontSize: "1.4rem", color: "rgb(123, 128, 154)" }}
              >
                Celular
              </TableCell>

              <TableCell
                align="right"
                style={{ fontSize: "1.4rem", color: "rgb(123, 128, 154)" }}
              >
                Puesto
              </TableCell>

              <TableCell
                align="right"
                style={{ fontSize: "1.4rem", color: "rgb(123, 128, 154)" }}
              >
                Calificación
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {(qualifications.length > 0) &&
              qualifications.map((qualification, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ fontSize: "1.4rem", color: "rgb(52, 71, 103)" }}
                  >
                    {qualification.postulante.postulante_nombre}
                  </TableCell>

                  <TableCell
                    align="right"
                    style={{ fontSize: "1.4rem", color: "rgb(52, 71, 103)" }}
                  >
                    {qualification.postulante.postulante_apellido}
                  </TableCell>

                  <TableCell
                    align="right"
                    style={{ fontSize: "1.4rem", color: "rgb(52, 71, 103)" }}
                  >
                    {qualification.postulante.postulante_celular}
                  </TableCell>

                  <TableCell
                    align="right"
                    style={{
                      fontSize: "1.4rem",
                      color: "rgb(52, 71, 103)",
                    }}
                  >
                    {qualification.convocatoria.convocatoria_nombre}
                  </TableCell>

                  <TableCell
                    align="right"
                  >
                    <Slider
                      defaultValue={+qualification.calf_academica + +qualification.calf_laboral +  +qualification.calf_psicologica}
                      aria-label="Always visible"
                      valueLabelDisplay="on"
                      max={200}
                      disabled
                      style={{
                        color: "rgb(67, 160, 71)",
                      }}
                    />
                  </TableCell>

                  <TableCell
                    align="right"
                    style={{ fontSize: "1.4rem", color: "rgb(52, 71, 103)" }}
                  >
                    <ButtonModal  applicant={applicants} announcements={announcements} qualifications={qualification} academics={academics} psycho={psycho} trabajo={trabajo}/>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>      
    </div>
  );
};

export default Tables
