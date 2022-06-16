import { React, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import {
  Button,
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
} from "@mui/material";
import { TextFieldsOutlined } from "@mui/icons-material";
//import { Formik } from "formik";
//import { useFormik } from "formik";
import DateAdapter from "@mui/lab/AdapterDateFns";
import { LocalizationProvider, DatePicker } from "@mui/lab";
import { getPostulantes, registerLaboral } from "../../service/firestore";
import swal from "sweetalert";
import "../../styles/page/formEstilo.scss";
import SendIcon from "@mui/icons-material/Send";
import { postLaboral } from "../../service/laboral.Services";

const FormLaboral = () => {
  const [idPostulante, setIDPostulante] = useState(localStorage.getItem("idPostulante")
  );

  const [Tiempo, setTiempo] = useState(null);

  const handleChangeTiempo = (event) => {
    setTiempo(event.target.value);
  };

  const [values, setValues] = useState({
    postulante_id: idPostulante,
    nombre_empresa: "",
    ruc: "",
    telefono: "",
    direccion: "",
    cargo_desempenho: "",
    fecha_inicio: new Date(),
    fecha_termino: new Date(),
    descripcion_actividad: "",
    tiempo: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,

      fecha_inicio: FechaInicio,
      fecha_termino: FechaFinal,
      tiempo: Tiempo,
    });
  };

  const handleClickRegisterLaboral = async () => {
    //await registerLaboral(+idPostulante, values);
    await postLaboral(values)

    let califLaboral = 0;
    console.log("dice tiempo", values.tiempo);
    if (values.tiempo === "De 0 a 1 anho") {
      califLaboral = 10;
    } else if (values.tiempo === "De 1 a 2 anhos") {
      califLaboral = 20;
    } else if (values.tiempo === "De 2 a 3 anhos") {
      califLaboral = 30;
    } else if (values.tiempo === "3 anhos a mas") {
      califLaboral = 40;
    }

    console.log("milaboral", califLaboral);

    localStorage.setItem("califLaboral", +califLaboral);

    swal({
      icon: "success",
      title: "Success",
      text: "Se creo correctamente",
    });
  };

  const [FechaInicio, setFechaInicio] = useState(null);
  const [FechaFinal, setFechaFinal] = useState(null);

  const handleChangeFechaInicio = (event) => {
    setFechaInicio(event.target.value);
  };

  const handleChangeFechaFinal = (event) => {
    setFechaFinal(event.target.value);
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
        <h1>Formulario Laboral</h1>
        <TextField
          name="nombre_empresa"
          label="Nombre Empresa"
          type="text"
          variant="filled"
          onChange={handleInputChange}
        />
        <TextField
          name="ruc"
          label="RUC"
          type="text"
          variant="filled"
          onChange={handleInputChange}
        />
        <TextField
          name="telefono"
          label="Telefono"
          type="text"
          variant="filled"
          onChange={handleInputChange}
        />
        <TextField
          name="direccion"
          label="Direccion"
          type="text"
          variant="filled"
          onChange={handleInputChange}
        />
        <TextField
          name="cargo_desempenho"
          label="Cargo que Desempeño"
          type="text"
          variant="filled"
          onChange={handleInputChange}
        />
        <Box>
          <LocalizationProvider dateAdapter={DateAdapter}>
            <DatePicker
              sx={{ color: "gray", position: "relative", top: "15px" }}
              label="Fecha Inicio"
              value={FechaInicio}
              onChange={(newFechaInicio) => {
                setFechaInicio(newFechaInicio);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>
        <Box>
          <LocalizationProvider dateAdapter={DateAdapter}>
            <DatePicker
              sx={{ color: "gray", position: "relative", top: "15px" }}
              label="Fecha Termino"
              value={FechaFinal}
              onChange={(newFechaFin) => {
                setFechaFinal(newFechaFin);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>
        <Box fullWidth>
          <InputLabel
            fullWidth
            id="select-genero-label"
            variant="filled"
            sx={{ color: "gray", position: "relative", top: "15px" }}
          >
            Tiempo Laboral
          </InputLabel>
          <Select
            fullWidth
            labelId="select-tiempo-label"
            id="select-tiempo"
            value={Tiempo}
            label="tiempo"
            onChange={handleChangeTiempo}
            variant="filled"
          >
            <MenuItem value={"De 0 a 1 anho"}>De 0 a 1 año</MenuItem>
            <MenuItem value={"De 1 a 2 anhos"}>De 1 a 2 años</MenuItem>
            <MenuItem value={"De 2 a 3 anhos"}>De 2 a 3 años</MenuItem>
            <MenuItem value={"3 anhos a mas"}>3 años a mas</MenuItem>
          </Select>
        </Box>
        <TextField
          name="descripcion_actividad"
          label="Descripcion Actividad (Breve)"
          type="text"
          variant="filled"
          onChange={handleInputChange}
        />
        <Button
          onClick={handleClickRegisterLaboral}
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
    <Link to="/form-psicologico">
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
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
export default FormLaboral;
