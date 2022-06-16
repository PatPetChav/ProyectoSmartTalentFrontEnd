import { React, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import {
  Select,
  MenuItem,
  Stack,
  TextField,
  Box,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Container,
  Grid,
  Checkbox,
  Button,
} from "@mui/material";

import { TextFieldsOutlined } from "@mui/icons-material";
import DateAdapter from "@mui/lab/AdapterDateFns";
import { LocalizationProvider, DatePicker } from "@mui/lab";
import { getPostulantes, registerAcademico } from "../../service/firestore";
import swal from "sweetalert";
import "../../styles/page/formEstilo.scss";
import SendIcon from "@mui/icons-material/Send";
import { postAcademico } from "../../service/academicoServices";

const FormAcademico = () => {
  const [idPostulante, setIDPostulante] = useState(localStorage.getItem("idPostulante")
  );

  const [values, setValues] = useState({
    postulante_id:idPostulante,
    profesion: "",
    area_profesional: "",
    nivel_academico: "",
    centro_estudios: "",
    fecha_egreso: new Date(),
    curso_adicional_1: "",
    curso_adicional_2: "",
    nivel_ingles: "basico",
    estado: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,

      area_profesional: Areaprofesional,
      nivel_academico: Nivelacademico,
      fecha_egreso: Fecha,
      nivel_ingles: Nivelingles,
      estado: "activo",
    });

    console.log("values", values);
  };

  const [califAcadem, setCalifAcadem] = useState(0);

  const handleClickRegisterAcademico = async () => {

    const NuevoAcademico = await postAcademico(values)
    // await registerAcademico(+idPostulante, values);

    let academ = 0;
    let ingles = 0;
    let curso1 = 0;
    let curso2 = 0;

    if (values.nivel_academico === "secundaria") {
      academ = 5;
    } else if (values.nivel_academico === "tecnico") {
      academ = 10;
    } else if (values.nivel_academico === "universitario") {
      academ = 15;
    } else if (values.nivel_academico === "titulado") {
      academ = 20;
    } else if (values.nivel_academico === "maestria") {
      academ = 25;
    } else if (values.nivel_academico === "doctorado") {
      academ = 30;
    }
    console.log("academico", academ);

    if (values.nivel_ingles === "ninguno") {
      ingles = 0;
    } else if (values.nivel_ingles === "basico") {
      ingles = 5;
    } else if (values.nivel_ingles === "intermedio") {
      ingles = 10;
    } else if (values.nivel_ingles === "avanzado") {
      ingles = 15;
    } else if (values.nivel_ingles === "nativo") {
      ingles = 20;
    }
    console.log("que dice", values.nivel_ingles);
    console.log("ingles", ingles);

    if (values.curso_adicional_1 !== "") {
      curso1 = 7;
    }
    console.log("curso1", curso1);

    if (values.curso_adicional_2 !== "") {
      curso2 = 8;
    }
    console.log("curso2", curso2);

    const suma = academ + ingles + curso1 + curso2;
    console.log("sumaAcadmico", suma);
    //setCalifAcadem(suma)

    localStorage.setItem("califAcademica", suma);

    swal({
      icon: "success",
      title: "Success",
      text: "Se creo correctamente",
    });
  };

  const [Fecha, setFecha] = useState(null);
  const [Areaprofesional, setAreaprofesional] = useState(null);
  const [Nivelacademico, setNivelacademico] = useState(null);
  const [Nivelingles, setNivelingles] = useState(null);

  const handleChangeAreaprofesional = (event) => {
    setAreaprofesional(event.target.value);
  };

  const handleChangeNivelacademico = (event) => {
    setNivelacademico(event.target.value);
  };

  const handleChangeNivelingles = (event) => {
    setNivelingles(event.target.value);
  };

  return (
    <FormControl container className="formEstilo" mt={2}>
      <Stack
        component="form"
        sx={{
          // width: "auto",
          width: "80%",
          maxWidth: "600px",
          margin: "20px auto",
          background: "#fff",
          padding: "2rem",
          borderRadius: "1rem",
        }}
        spacing={2}
        noValidate
        autoComplete="off"
      >
        <h1>Formulario academico</h1>
        <TextField
          name="profesion"
          label="Profesión"
          type="text"
          variant="filled"
          onChange={handleInputChange}
        />
        <Box fullWidth>
          <InputLabel
            fullWidth
            id="select-profesion-label"
            variant="filled"
            sx={{ color: "gray", position: "relative", top: "15px" }}
          >
            Area profesional
          </InputLabel>
          <Select
            fullWidth
            labelId="select-profesion-label"
            id="select-profesion"
            value={Areaprofesional}
            label="Area profesional"
            onChange={handleChangeAreaprofesional}
            variant="filled"
          >
            <MenuItem value={"Comercial, Ventas Y Negocios "}>
              Comercial, Ventas Y Negocios
            </MenuItem>
            <MenuItem value={"Administracion, Contabilidad Y Finanzas "}>
              Administracion, Contabilidad Y Finanzas
            </MenuItem>
            <MenuItem value={"Oficios Y Otros "}>Oficios Y Otros</MenuItem>
            <MenuItem value={"Tecnologia, Sistemas Y Telecomunicaciones"}>
              Tecnologia, Sistemas Y Telecomunicaciones
            </MenuItem>
            <MenuItem value={"Produccion y Manufactura"}>
              Produccion y Manufactura
            </MenuItem>
            <MenuItem
              value={"Atencion Al Cliente, Call Center Y Telemarketing "}
            >
              Atencion Al Cliente, Call Center Y Telemarketing
            </MenuItem>
            <MenuItem value={"Abastecimiento y Logistica "}>
              Abastecimiento y Logistica
            </MenuItem>
            <MenuItem value={"Ingenierias "}>Ingenierias</MenuItem>
            <MenuItem value={"Salud, Medicina y Farmacia"}>
              Salud, Medicina y Farmacia
            </MenuItem>
            <MenuItem value={"RecHumCapacit"}>
              Recursos Humanos y Capacitacion
            </MenuItem>
            <MenuItem value={"Mineria, Petroleo Y Gas "}>
              Mineria, Petroleo Y Gas
            </MenuItem>
            <MenuItem value={"Marketing Y Publicidad "}>
              Marketing Y Publicidad
            </MenuItem>
            <MenuItem value={"Ingenieria Civil y Construccion"}>
              Ingenieria Civil y Construccion
            </MenuItem>
            <MenuItem value={"Educacion, Docencia e Investigacion "}>
              Educacion, Docencia e Investigacion
            </MenuItem>
            <MenuItem value={"Gastronomia Y Turismo "}>
              Gastronomia Y Turismo
            </MenuItem>
            <MenuItem value={"Legales "}>Legales</MenuItem>
            <MenuItem value={"Diseno "}>Diseno</MenuItem>
            <MenuItem
              value={"Comunicacion, Relaciones Institucionales Y Publicas "}
            >
              Comunicacion, Relaciones Institucionales Y Publicas
            </MenuItem>
            <MenuItem value={"Secretarias y Recepcion "}>
              Secretarias y Recepcion
            </MenuItem>
            <MenuItem value={"Aduana y Comercio Exterior "}>
              Aduana y Comercio Exterior
            </MenuItem>
            <MenuItem value={"Seguros "}>Seguros</MenuItem>
            <MenuItem value={"Gerencia y Direccion General "}>
              Gerencia y Direccion General
            </MenuItem>
            <MenuItem value={"Enfermeria "}>Enfermeria</MenuItem>
          </Select>
        </Box>
        <Box fullWidth>
          <InputLabel
            fullWidth
            id="select-nivelAcademico-label"
            variant="filled"
            sx={{ color: "gray", position: "relative", top: "15px" }}
          >
            Nivel Academico
          </InputLabel>
          <Select
            fullWidth
            labelId="select-nivelAcademico-label"
            id="select-nivelAcademico"
            value={Nivelacademico}
            label="Nivel Academico"
            onChange={handleChangeNivelacademico}
            variant="filled"
          >
            <MenuItem value={"secundaria"}>Secundaria</MenuItem>
            <MenuItem value={"tecnico"}>Tecnico</MenuItem>
            <MenuItem value={"universitario"}>Universitario</MenuItem>
            <MenuItem value={"titulado"}>Titulado</MenuItem>
            <MenuItem value={"maestria"}>Maestria</MenuItem>
            <MenuItem value={"doctorado"}>Doctorado</MenuItem>
          </Select>
        </Box>
        <TextField
          name="centro_estudios"
          label="Centro de estudios"
          type="text"
          variant="filled"
          onChange={handleInputChange}
        />
        <Box>
          <LocalizationProvider dateAdapter={DateAdapter}>
            <DatePicker
              sx={{ color: "gray", position: "relative", top: "15px" }}
              label="Fecha de egreso"
              value={Fecha}
              onChange={(newFecha) => {
                setFecha(newFecha);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>
        <Box fullWidth>
          <InputLabel
            fullWidth
            id="select-ingles-label"
            variant="filled"
            sx={{ color: "gray", position: "relative", top: "15px" }}
          >
            Nivel de ingles
          </InputLabel>
          <Select
            fullWidth
            labelId="select-ingles-label"
            id="select-ingles"
            value={Nivelingles}
            label="Nivel de ingles"
            onChange={handleChangeNivelingles}
            variant="filled"
          >
            <MenuItem value={"ninguno"}>Ninguno</MenuItem>
            <MenuItem value={"basico"}>Basico</MenuItem>
            <MenuItem value={"intermedio"}>Intermedio</MenuItem>
            <MenuItem value={"avanzado"}>Avanzado</MenuItem>
            <MenuItem value={"nativo"}>Nativo</MenuItem>
          </Select>
        </Box>
        <TextField
          name="curso_adicional_1"
          label="Curso adicional 1"
          type="text"
          variant="filled"
          onChange={handleInputChange}
        />
        <TextField
          name="curso_adicional_2"
          label="Curso adicional 2"
          type="text"
          variant="filled"
          onChange={handleInputChange}
        />
        <Button
          onClick={handleClickRegisterAcademico}
          variant="contained"
          sx={{
            // width: "auto",
            height: "40px",
            borderRadius: "10px",
            fontSize: "14px",
            fontFamily: "opensans-regular",
            margin: "3rem auto",
            textAlign: "center",
          }}
        >
          Guardar
        </Button>
      </Stack>
      <TextButtons />
    </FormControl>
  );
};

export const TextButtons = () => {
  return (
    <Link to="/form-laboral">
      <Stack direction="row" spacing={2}>
        <Button
          className="botonEstilo"
          sx={{
            width: "auto",
            margin: "20px auto",
            background: "#022251",
            color: "#fff",
            fontSize: "10px",
            padding: "10px",
          }}
          href="#text-buttons"
          endIcon={<SendIcon />}
        >
          Siguiente
        </Button>
      </Stack>
    </Link>
  );
};

export default FormAcademico;
