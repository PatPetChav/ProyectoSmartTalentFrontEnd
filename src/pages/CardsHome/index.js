// Importando react-router-dom
import { Link } from "react-router-dom";
//Importando Hooks
import { useState, useEffect } from "react";
//Importando de firestore
import { getAnnouncements } from "../../service/firestore";
import { getCardsHome } from "../../service/cardsHomeServices";

// Importando Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faUser,
  faCalendar,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
// Importando MUI
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button,
} from "@mui/material";
// Importando SASS
import "./../../styles/page/cardsHome.scss";

const CardsHome = () => {
  // Para utilizarlo con la base de datos tblConvocatoria
  const [announcements, setAnnouncements] = useState([]);

  // Obteniendo la base de datos tblConvocatoria
  const fetchAnnouncements = async () => {
    const data = await getAnnouncements();
    setAnnouncements(data);
    //console.log(data);
  };

  const handleClickPostulate = (id) => {
    //console.log(id);
    localStorage.setItem("idConvocatoria", id);
  };

  const FormatoFecha =(fecha) =>{
    let d = new Date(fecha);
    var month = new Array(11);
    month[0] = "01";
    month[1] = "02";
    month[2] = "03";
    month[3] = "04";
    month[4] = "05";
    month[5] = "06";
    month[6] = "07";
    month[7] = "08";
    month[8] = "09";
    month[9] = "10";
    month[10] = "11";
    month[11] = "12";
    return d.getDate() + '/' + month[d.getMonth()] + "/" + d.getFullYear()
  }

  

  //Inicializando los fetch
  useEffect(() => {
    getCardsHome()
    .then(data=>{
      if(data.ok){
        setAnnouncements(data.content);        
      }
      console.log(announcements)
    })
    // fetchAnnouncements();
  }, []);
  return (
    <div className="cards-home">
      <div className="cards-home__container">
        <h2 className="cards-title">Ofertas Laborales</h2>
        <Grid container spacing={3} className="gridCardsHome">
          {announcements.length > 0 &&
            announcements.map((announcement, index) => (
              <Grid
                key={index}
                item
                md={6}
                lg={6}
                sm={12}
                xs={12}
                style={{ minHeight: "730px" }}
              >
                <Card className="card" sx={{ borderRadius: "2rem" }}>
                  <CardMedia
                    component="img"
                    className="img-pokemon"
                    image={announcement.convocatoria_photo}
                    sx={{ height: "25rem" }}
                  />
                  <CardContent
                    className="card__content"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <h3 className="card__name">
                      {announcement.convocatoria_nombre}
                    </h3>

                    <Grid container spacing={3} mb={2}>
                      <Grid item md={12} lg={12} sm={12} xs={12} mb={2}>
                        <p className="card__description">
                          {announcement.convocatoria_descripcion}
                        </p>
                      </Grid>

                      <Grid item md={6} lg={6} sm={4} xs={6} mb={2}>
                        <FontAwesomeIcon
                          icon={faLocationDot}
                          className="icon--card"
                        />
                        <span className="card__span">{announcement.lugar}</span>
                      </Grid>
                      {/* Trabajar en conjunto con el área de SEGURIDAD y garantizar que en la compañía la SEGURIDAD ES LO PRIMERO. Garantizar la Calidad en planta a través de los SMD y Elementos Clave (EC) del sistema de Gestión de Calidad.  */}

                      <Grid item md={6} lg={6} sm={4} xs={6} mb={2}>
                        <FontAwesomeIcon icon={faUser} className="icon--card" />
                        <span className="card__span">{announcement.numero_vacantes}</span>
                      </Grid>

                      <Grid item md={6} lg={6} sm={4} xs={6} mb={2}>
                        <FontAwesomeIcon
                          icon={faCalendar}
                          className="icon--card"
                        />
                        <span className="card__span">
                        {FormatoFecha(announcement.fecha_inicio)} - {FormatoFecha(announcement.fecha_termino)}</span>
                      </Grid>

                      <Grid item md={6} lg={6} sm={4} xs={6} mb={2}>
                        <FontAwesomeIcon
                          icon={faMoneyBill}
                          className="icon--card"
                        />
                        <span className="card__span">{announcement.remuneracion}</span>
                      </Grid>
                    </Grid>

                    <Link to={"/form-postulante"}>
                      <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={() =>
                          handleClickPostulate(+announcement.convocatoria_id)
                        }
                        sx={{ fontSize: "1.6rem", borderRadius: "1rem" }}
                      >
                        Postular
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </div>
    </div>
  );
};

export default CardsHome;
