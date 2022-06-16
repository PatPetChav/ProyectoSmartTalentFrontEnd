import { React, useState, useEffect } from "react";
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
  Button,
} from "@mui/material";
import { TextFieldsOutlined } from "@mui/icons-material";
import DateAdapter from "@mui/lab/AdapterDateFns";
import { LocalizationProvider, DatePicker } from "@mui/lab";
import { getPostulantes, registerPostulante } from "../../service/firestore";
import swal from "sweetalert";
import { getMonth } from "date-fns";
import "../../styles/page/formEstilo.scss";
import SendIcon from "@mui/icons-material/Send";
import { getPostulante, postPostulante } from "../../service/postulanteServices";

const FormPostulante = () => {
  const [idConvocatoria, setIDConvocatoria] = useState(
    localStorage.getItem("idConvocatoria")
  );

  const [values, setValues] = useState({
    postulante_nombre: "",
    postulante_apellido: "",
    postulante_dni: "",
    postulante_email: "",
    postulante_fecha_nacimiento: new Date(),
    postulante_genero: "",
    postulante_pais: "",
    postulante_celular: "",
    postulante_departamento: "",
    postulante_provincia: "",
    postulante_direccion: "",
    estado: "",
    fecha_postulacion: "",
    mes_postulacion: "",
   
  });

  console.log(values)

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,

      postulante_genero: Genero,
      postulante_departamento: Departamento,
      postulante_provincia: Provincia,
      postulante_fecha_nacimiento: Fecha,
      estado: "activo",
      fecha_postulacion: new Date(),
      mes_postulacion: new Date().getMonth(),
     
    });
  };

  const [respuesta, setRespuesta] = useState([]);

  const [idPostulante, setIdPostulante] = useState(0);

  const [Fecha, setFecha] = useState(null);
  const [Genero, setGenero] = useState(null);
  const [Departamento, setDepartamento] = useState(null);
  const [Provincia, setProvincia] = useState(null);

  const handleChangeGenero = (event) => {
    setGenero(event.target.value);
  };

  const handleChangeDepartamento = (event) => {
    setDepartamento(event.target.value);
  };

  const handleChangeProvincia = (event) => {
    setProvincia(event.target.value);
  };

  const handleClickRegisterPostulante = async () => {
    
    const NuevoPostulante = await postPostulante(values)

    let IdNuevo = NuevoPostulante.content.postulante_id
    console.log("variablesIDNuevo",IdNuevo)
    //setIdPostulante(IdNuevo);
    
    console.log("idnuevo",NuevoPostulante.content.postulante_id)

    
    
    // await registerPostulante(idPostulante, values);

    localStorage.setItem("idPostulante", IdNuevo);

    swal({
      icon: "success",
      title: "Success",
      text: "Se creo correctamente el Postulante",
    });
  };

  // const handleIdPostulante = async () => {
  //   const id = await getPostulantes();
  //   setIdPostulante(id + 1);
  //   console.log("este es el id", idPostulante);
  // };

  // useEffect(() => {
  //   // handleIdPostulante();
  //   //getPostulante()

  // }, [idPostulante]);

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
        <h1>Formulario de datos</h1>
        <TextField
          name="postulante_nombre"
          label="Nombre"
          type="text"
          variant="filled"
          onChange={handleInputChange}
          sx={{fontSize:"1.4rem", width:"100%"}}
        />
        <TextField
          name="postulante_apellido"
          label="Apellido"
          type="text"
          variant="filled"
          onChange={handleInputChange}
          sx={{fontSize:"1.4rem"}}
        />
        <TextField
          name="postulante_dni"
          label="Dni"
          type="text"
          variant="filled"
          onChange={handleInputChange}
          sx={{fontSize:"1.4rem"}}
        />
        <TextField
          name="postulante_email"
          label="Correo"
          type="mail"
          variant="filled"
          onChange={handleInputChange}
          sx={{fontSize:"1.4rem"}}
        />

        <Box>
          <LocalizationProvider dateAdapter={DateAdapter}>
            <DatePicker
              sx={{ color: "gray", position: "relative", top: "15px", fontSize:"1.4rem" }}              
              label="Fecha de nacimiento"
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
            id="select-genero-label"
            variant="filled"
            sx={{ color: "gray", position: "relative", top: "15px", fontSize:"1.4rem" }}
          >
            Genero
          </InputLabel>
          <Select
            fullWidth
            labelId="select-genero-label"
            id="select-genero"
            value={Genero}
            label="Genero"
            onChange={handleChangeGenero}
            variant="filled"
            sx={{fontSize:"1.4rem"}}
          >
            <MenuItem value={"femenino"}>Femenino</MenuItem>
            <MenuItem value={"masculino"}>Masculino</MenuItem>
          </Select>
        </Box>
        <TextField
          name="postulante_pais"
          label="Pais de nacimiento"
          type="text"
          variant="filled"
          onChange={handleInputChange}
          sx={{fontSize:"1.4rem"}}
        />
        <TextField
          name="postulante_celular"
          label="Celular"
          type="text"
          variant="filled"
          onChange={handleInputChange}
          sx={{fontSize:"1.4rem"}}
        />
        <Box fullWidth>
          <InputLabel
            fullWidth
            id="select-departamento-label"
            variant="filled"
            sx={{ color: "gray", position: "relative", top: "15px", fontSize:"1.4rem" }}            
          >
            Departamento
          </InputLabel>
          <Select
            fullWidth
            labelId="select-departamento-label"
            id="select-departamento"
            value={Departamento}
            label="Departamento"
            onChange={handleChangeDepartamento}
            variant="filled"
          >
            <MenuItem value={"Amazonas "}>Amazonas</MenuItem>
            <MenuItem value={"Áncash "}>Áncash</MenuItem>
            <MenuItem value={"Apurímac "}>Apurímac</MenuItem>
            <MenuItem value={"Arequipa "}>Arequipa</MenuItem>
            <MenuItem value={"Ayacucho "}>Ayacucho</MenuItem>
            <MenuItem value={"Cajamarca "}>Cajamarca</MenuItem>
            <MenuItem value={"Callao "}>Callao</MenuItem>
            <MenuItem value={"Cusco "}>Cusco</MenuItem>
            <MenuItem value={"Huancavelica "}>Huancavelica</MenuItem>
            <MenuItem value={"Huánuco "}>Huánuco</MenuItem>
            <MenuItem value={"Ica "}>Ica</MenuItem>
            <MenuItem value={"Junín "}>Junín</MenuItem>
            <MenuItem value={"La Libertad "}>La Libertad</MenuItem>
            <MenuItem value={"Lambayeque "}>Lambayeque</MenuItem>
            <MenuItem value={"Lima "}>Lima</MenuItem>
            <MenuItem value={"Loreto "}>Loreto</MenuItem>
            <MenuItem value={"Madre de Dios "}>Madre de Dios</MenuItem>
            <MenuItem value={"Moquegua "}>Moquegua</MenuItem>
            <MenuItem value={"Pasco "}>Pasco</MenuItem>
            <MenuItem value={"Piura "}>Piura</MenuItem>
            <MenuItem value={"Puno "}>Puno</MenuItem>
            <MenuItem value={"San Martín "}>San Martín</MenuItem>
            <MenuItem value={"Tacna "}>Tacna</MenuItem>
            <MenuItem value={"Tumbes "}>Tumbes</MenuItem>
            <MenuItem value={"Ucayali "}>Ucayali</MenuItem>
          </Select>
        </Box>
        <Box fullWidth>
          <InputLabel
            fullWidth
            id="select-provincia-label"
            variant="filled"
            sx={{ color: "gray", position: "relative", top: "15px", fontSize:"1.4rem" }}            
          >
            Provincia
          </InputLabel>
          <Select
            fullWidth
            labelId="select-provincia-label"
            id="select-provincia"
            value={Provincia}
            label="Provincia"
            onChange={handleChangeProvincia}
            variant="filled"
          >
            <MenuItem value={"Abancay "}>Abancay</MenuItem>
            <MenuItem value={"Arequipa "}>Arequipa</MenuItem>
            <MenuItem value={"Ayacucho "}>Ayacucho</MenuItem>
            <MenuItem value={"Cajamarca "}>Cajamarca</MenuItem>
            <MenuItem value={"Callao "}>Callao</MenuItem>
            <MenuItem value={"Cerro de Pasco "}>Cerro de Pasco</MenuItem>
            <MenuItem value={"Chachapoyas "}>Chachapoyas</MenuItem>
            <MenuItem value={"Chiclayo "}>Chiclayo</MenuItem>
            <MenuItem value={"Cuzco "}>Cuzco</MenuItem>
            <MenuItem value={"Huancavelica "}>Huancavelica</MenuItem>
            <MenuItem value={"Huancayo "}>Huancayo</MenuItem>
            <MenuItem value={"Huánuco "}>Huánuco</MenuItem>
            <MenuItem value={"Huaraz "}>Huaraz</MenuItem>
            <MenuItem value={"Ica "}>Ica</MenuItem>
            <MenuItem value={"Iquitos "}>Iquitos</MenuItem>
            <MenuItem value={"Lima "}>Lima</MenuItem>
            <MenuItem value={"Moquegua "}>Moquegua</MenuItem>
            <MenuItem value={"Moyobamba "}>Moyobamba</MenuItem>
            <MenuItem value={"Piura "}>Piura</MenuItem>
            <MenuItem value={"Pucallpa "}>Pucallpa</MenuItem>
            <MenuItem value={"Puerto Maldonado "}>Puerto Maldonado</MenuItem>
            <MenuItem value={"Puno "}>Puno</MenuItem>
            <MenuItem value={"Tacna "}>Tacna</MenuItem>
            <MenuItem value={"Trujillo "}>Trujillo</MenuItem>
            <MenuItem value={"Tumbes "}>Tumbes</MenuItem>
            <MenuItem value={"Otro "}>Otro</MenuItem>
          </Select>
        </Box>

        <TextField
          name="postulante_direccion"
          label="Direccion"
          type="text"
          variant="filled"
          onChange={handleInputChange}
          sx={{fontSize:"1.4rem"}}
        />
        <Button
          onClick={handleClickRegisterPostulante}
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
    <Link to="/form-academico">
      <Stack direction="row" spacing={2} display="flex">
        <Button
          className="botonEstilo"
          sx={{
            width: "auto",
            margin: "20px auto",
            background: "#022251",
            color: "#fff",
            fontSize: "10px",
          }}
          size="large"
          hover={true}
          href="#text-buttons"
          endIcon={<SendIcon />}
        >
          Siguiente
        </Button>
      </Stack>
    </Link>
  );
};

export default FormPostulante;
