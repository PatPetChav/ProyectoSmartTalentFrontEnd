import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Divider,
  Button,
  Stack,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  TextField,
} from "@mui/material";
import {
  getTests,
  registerCalificacion,
  registerPsicologico,
} from "../../service/firestore";
import swal from "sweetalert";
import "./../../styles/page/formEstilo.scss";
import { height } from "@mui/system";
import { getTest } from "../../service/testServices";
import { postPsicologico } from "../../service/psicologicoServices";
import { postCalificacion } from "../../service/calificacionServices";

const FormPsicologico = () => {
  const [idPostulante, setIDPostulante] = useState(
    localStorage.getItem("idPostulante")
  );

  const [idConvocatoria, setIDConvocatoria] = useState(
    localStorage.getItem("idConvocatoria")
  );

  const [califAcademica, setCalifAcademica] = useState(
    localStorage.getItem("califAcademica")
  );

  const [califLaboral, setCalifLaboral] = useState(
    localStorage.getItem("califLaboral")
  );

  //Para traer las preguntas
  const [tests, setTests] = useState([]);

  const fetchTests = async () => {
    const data = await getTests();
    setTests(data);
  };

  useEffect(() => {
    //fetchTests();
    getTest()
    .then(data=>{
      if(data.ok){
        setTests(data.content);        
      }
      console.log(tests)
    })
  }, []);

  //Para leer las respuestas
  const [values, setValues] = useState({
    postulante_id:idPostulante,
    test_id: "",
    calificacion: "",
  });

  let [sumaAsertividad, setSumaAsertividad] = useState(0);
  let [sumaComunicacion, setSumaComunicacion] = useState(0);
  let [sumaAutoestima, setSumaAutoestima] = useState(0);
  let [sumaTomaDesicion, setSumaTomaDesicion] = useState(0);

  const handleChangeCalificacion = (event) => {
    setValues({
      id_test: event.target.name,
      calificacion: event.target.value,
    });

    const nroTest = +event.target.name;
    const calificacionTest = +event.target.value;
    console.log("NumeroTest", nroTest);

    if (nroTest <= 12) {
      const sumaa = (sumaAsertividad += calificacionTest);
      setSumaAsertividad(sumaa);
    } else if ((nroTest > 12) & (nroTest <= 21)) {
      const sumac = (sumaComunicacion += calificacionTest);
      setSumaComunicacion(sumac);
    } else if ((nroTest > 21) & (nroTest <= 33)) {
      setSumaAutoestima((sumaAutoestima += calificacionTest));
    } else {
      setSumaTomaDesicion((sumaTomaDesicion += calificacionTest));
    }

    console.log("calificacion", calificacionTest);
    console.log("idtest", nroTest);
    console.log("asertiva", sumaAsertividad);
    console.log("comunica", sumaComunicacion);
    console.log("autoesti", sumaAutoestima);
    console.log("tomadecisi", sumaTomaDesicion);
  };

  const [isDisabled,setIsDisabled] = useState(null);
  const handleClickRegisterCalificacion = async (index) => {
    //await registerPsicologico(idPostulante, values);
    await postPsicologico(values)

    setIsDisabled({
      ...isDisabled,
      [index]: true,
    });

    console.log("isDisabled", isDisabled);

    //swal({
    //  icon: "success",
    //  title: "Success",
    //  text: "Se creo correctamente el Postulante",
    //});
  };

  const handleClickRegisterCalificaciones = async () => {
    //aqui pongo los valores

    const sumaP =
      sumaAsertividad + sumaComunicacion + sumaAutoestima + sumaTomaDesicion;
    console.log("sumaA", sumaAsertividad);
    console.log("sumaC", sumaComunicacion);
    console.log("sumaP", sumaP);

    const calificaciones = {
      postulante_id:idPostulante,
      convocatoria_id:idConvocatoria,
      calf_academica: +califAcademica,
      calf_laboral: +califLaboral,
      calf_psicologica: +sumaP,
      calf_asertividad: +sumaAsertividad,
      calf_comunicacion: +sumaComunicacion,
      calf_autoestima: +sumaAutoestima,
      calf_tomadecision: +sumaTomaDesicion,
      estado:'activo',
    };

    //await registerCalificacion(+idPostulante, +idConvocatoria, calificaciones);
    await postCalificacion(calificaciones)
    console.log("todas califica", calificaciones);
    
  };

  return (
    // <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "center" }}>
    <FormControl
      container
      className="formEstilo"
      mt={2}
      sx={{
        alignItems: "center",
        width: "100%",
        height: "auto",
        background: "linear-gradient(90deg, #43c6ac 0%, #191654 100%)",
      }}
    >
      <Stack
        component="form"
        sx={{
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
        <h1>Formulario Psicológico</h1>
        &nbsp;&nbsp;
        <h2>HABILIDADES SOCIALES</h2>
        <Divider />
        <Grid container spacing={3} mt={5} sx={{ width: "100%" }}>
          {tests.length > 0 &&
            tests.map((test, index) => (
              <Grid item xs={12}>
                <div>
                {/* {test.id_test} */}
                  <p className="test-preguta-psicologico">{test.pregunta}</p>
                </div>
                <div>
                  <FormControl
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    {/* <FormLabel id="label-radio"></FormLabel> */}
                    <RadioGroup
                      row
                      aria-labelledby="label-radio"
                      name={test.test_id}
                      onChange={handleChangeCalificacion}
                    >
                      <FormControlLabel
                        value={test.nunca}
                        control={<Radio />}
                        label="NUNCA"
                      />

                      <FormControlLabel
                        value={test.rara_vez}
                        control={<Radio />}
                        label="RARA VEZ"
                      />
                      <FormControlLabel
                        value={test.a_veces}
                        control={<Radio />}
                        label="A VECES"
                      />
                      <FormControlLabel
                        value={test.a_menudo}
                        control={<Radio />}
                        label="A MENUDO"
                      />
                      <FormControlLabel
                        value={test.siempre}
                        control={<Radio />}
                        label="SIEMPRE"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div>
                  <Button
                    disabled={
                      isDisabled !== null && isDisabled[index + 1]
                        ? true
                        : false
                    }
                    onClick={() => handleClickRegisterCalificacion(index + 1)}
                    variant="contained"
                  >
                    OK
                  </Button>
                </div>
              </Grid>
            ))}
        </Grid>
        <Link to="/fin-registro">
          <Button
            onClick={handleClickRegisterCalificaciones}
            variant="contained"
            fullWidth
            href="#text-buttons"
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
            Terminar
          </Button>
        </Link>
      </Stack>
    </FormControl>
  );
};

export const TextButtons = () => {
  return (
    <Link to="/fin-registro">
      <Stack direction="row" spacing={2} mt={5}>
        <Button
          variant="contained"
          size="large"
          // sx={{
          //   width: "auto",
          //   margin: "20px auto",
          //   background: "#022251",
          //   color: "#fff",
          //   fontSize: "10px",
          //   padding: "10px",
          // }}
          sx={{
            width: "auto",
            height: "40px",
            borderRadius: "10px",
            fontSize: "14px",
            fontFamily: "opensans-regular",
            margin:'3rem auto',
            textAlign:'center'
          }}
          href="#text-buttons"
        >
          Finalizar
        </Button>
      </Stack>
    </Link>
  );
};

export const ButtonRespuesta = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined">Nunca</Button>
      <Button variant="outlined" sx={{ fontWeight: "bold", m: 1 }}>
        Rara vez
      </Button>
      <Button variant="outlined" sx={{ fontWeight: "bold", m: 1 }}>
        A veces
      </Button>
      <Button variant="outlined" sx={{ fontWeight: "bold", m: 1 }}>
        A menudo
      </Button>
      <Button variant="outlined" sx={{ fontWeight: "bold", m: 1 }}>
        Siempre
      </Button>
    </Stack>
  );
};

export default FormPsicologico;
