// Importando Hooks
import { useState, useContext } from "react";
// Importando Context
import { UserContext } from "../../context/UserContext";
// Importando firestore
import { loginUser } from "../../service/firestore";
//
import logo from "./../../assets/img/SmartTalent.png";
// Importando Material
import {
  Container,
  Button,
  Avatar,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import { height, width } from "@mui/material/node_modules/@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// Importando Sweet Alert
import swal from "sweetalert";

function Copyright(props) {
  return (
    <Typography variant="body2" align="center" {...props}>
      {"Copyright © "}
      <Link
        color="inherit"
        href="/"
        sx={{ fontFamily: "opensans-regular", fontSize: "14px" }}
      >
        Smart Talent
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const { storeUser } = useContext(UserContext);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleClickLogin = async () => {
    const { email, password } = userData;
    let response = await loginUser(email, password);

    if (!response.ok) {
      // si esto es falso el usuario no existe por ende lo vamos a crear
      // response = await storeUserFirebase(email, password);

      if (!response.ok) {
        swal({
          title: "Error",
          text: response.data,
          icon: "error",
        });
        return;
      }
    }
    // después del login el createUser se debe guardar al usuario en userContext para ser utilizado en las valaidaciones del layout private y aside log out
    storeUser(response.data.user);
    // Después de hacer click en iniciar sesion y haga las verificaciones respectivas te redirige al dashboard
    window.location.href = "/dashboard/dashboard";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
  };

  return (
    <ThemeProvider theme={theme}>
      {/* maxWidth="xs"  */}
      <Container
        className="containerlogin"
        sx={{ backgroundColor: "#fff", height: "100vh", width:'100%', paddingTop:'3rem' }}
      >
        <Box
          sx={{            
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin:'0 auto',
            minWidth: "200px",
            maxWidth: "400px",
            backgroundColor: "rgb(220, 232, 254)",
            padding:'0 3rem 1rem',
            borderRadius:'1rem',
            boxShadow: '10px 10px 5px -2px rgba(163, 162, 162, 0.75)',
          }}
        >
          <Avatar
            sx={{
              m: 3,
              width: "200px",
              height: "180px",
              backgroundColor: "ActiveBorder",
            }}
          >
            <img src={logo} width={"180px"} alt="logo"></img>
          </Avatar>

          <Typography sx={{ fontFamily: "opensans-bold", fontSize: "20px" }}>
            Iniciar Sesión
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 2 }}
          >
            <TextField
              sx={{ backgroundColor: "#1abc9c", height:"65px" }}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChangeInput}
            />

            <TextField
              sx={{ backgroundColor: "#1abc9c", height:"65px" }}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChangeInput}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                width: "auto",
                height: "40px",
                borderRadius: "10px",
                fontSize: "14px",
                fontFamily: "opensans-regular",
                margin:'3rem auto',
                textAlign:'center'
              }}
              onClick={handleClickLogin}
            >
              Iniciar Sesión
            </Button>        
          </Box>
        </Box>
        <Copyright sx={{ mt: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
