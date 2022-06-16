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
    const data = await getApplicants();
    setApplicants(data);
    // console.log(applicants);
  };

  // Obteniendo la base de datos tblConvocatoria
  const fetchAnnouncements = async () => {
    const data = await getAnnouncements();
    setAnnouncements(data);
    // console.log(data)
  };

  // Obteniendo la base de datos tblCalificacion
  const fetchQualifications = async () => {
    const data = await getQualifications();
    setQualifications(data);
    // console.log(data)
  };

  // Obtner la base de datos tbAcademico
  const fetchAcademics = async() => {
    const data = await getAcademics();
    setAcademics(data);
  }

  //Obtener la base de datos de tbPsicologico
  const fetchPsycho = async() => {
    const data = await getPsychological();
    setPsycho(data);
  }

  //Obtener la base de datos de tbLaboral
  const fetchLabor = async() => {
    const data = await getLabor();
    setTrabajo(data);
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
            {(applicants.length > 0) && (announcements.length > 0) && (qualifications.length > 0) &&
              applicants.map((applicant, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ fontSize: "1.4rem", color: "rgb(52, 71, 103)" }}
                  >
                    {applicant.nombre_postulante}
                  </TableCell>

                  <TableCell
                    align="right"
                    style={{ fontSize: "1.4rem", color: "rgb(52, 71, 103)" }}
                  >
                    {applicant.apellido_postulante}
                  </TableCell>

                  <TableCell
                    align="right"
                    style={{ fontSize: "1.4rem", color: "rgb(52, 71, 103)" }}
                  >
                    {applicant.numero_celular}
                  </TableCell>

                  <TableCell
                    align="right"
                    style={{
                      fontSize: "1.4rem",
                      color: "rgb(52, 71, 103)",
                    }}
                  >
                    {announcements.find(
                        (announcement) =>
                          announcement.id_convocatoria ===
                          applicant.id_convocatoria
                      ).nombre_convocatoria}
                  </TableCell>

                  <TableCell
                    align="right"
                  >
                    <Slider
                      defaultValue={+(qualifications.find((qualification) => qualification.id_postulante === applicant.id_postulante)?.calif_academica) + +(qualifications.find((qualification) => qualification.id_postulante === applicant.id_postulante)?.calif_laboral) + +(qualifications.find((qualification) => qualification.id_postulante === applicant.id_postulante)?.calif_psicologica)}

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
                    <ButtonModal applicant={applicant} announcements={announcements} qualifications={qualifications} academics={academics} psycho={psycho} trabajo={trabajo}/>
                  </TableCell>


                  {/* <TableCell
                    align="right"
                    style={{ fontSize: "1.4rem", color: "rgb(52, 71, 103)" }}
                    className="modal--icons"
                  >
                    <p>{announcements.map((announcement)=>announcement)}</p>
                    <FontAwesomeIcon icon={faEye} className="icon" onClick={handleOpenDialog} />
                    <ButtonModal 
                      applicant={applicant}
                      announcements={announcements}
                      qualifications={qualifications}
                    />
                  </TableCell> */}

                  {/* <TableCell align="right" style={{fontSize:'1.4rem', color:'#fff'}}>
                    <FontAwesomeIcon icon={faEye} className="icon"/>
                  </TableCell> */}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>      
    </div>
  );
};

export default Tables
