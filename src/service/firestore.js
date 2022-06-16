import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  updateDoc,
} from "firebase/firestore/lite";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { v4 as uuidv4 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyAtKjCX-cgfWOKpTjUxzbeLf48jHibYVGc",
  authDomain: "prysmarttalent.firebaseapp.com",
  projectId: "prysmarttalent",
  storageBucket: "prysmarttalent.appspot.com",
  messagingSenderId: "1036928853189",
  appId: "1:1036928853189:web:3e64b1b0dbc0dc465f3cac",
  measurementId: "G-06B162BMY2"
};
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);

  const db = getFirestore(app);

  // Hacer la petición para poder traer datos de tblEmpresa
export const getUsersAdmin = async () => {
  // paso 1: Traer la coleccion de datos
  const collectionEmpresa = collection(db, "empresa");
  // paso 2: Traer los documentos
  const documentUsers = await getDocs(collectionEmpresa);
  // paso 3: Crear un arreglo que guarde los documentos que estamos obteniendo
  const usersAdmin = documentUsers.docs.map((doc) => doc.data());
  return usersAdmin;
};

// Hacer la petición para poder traer datos de tblPostulantes
export const getPostulantes= async () => {
  // paso 1: Traer la coleccion de datos
  const collectionPostulantes = collection(db, "postulante");
  // paso 2: Traer los documentos
  const documentPostulantes = await getDocs(collectionPostulantes);
  // paso 3: Crear un arreglo que guarde los documentos que estamos obteniendo
  const postulantes = documentPostulantes.docs.map((doc) => doc.data());
  //console.log("postulantes",postulantes)
  //solo enviamos el numero de postulantes
  return postulantes.length;
}

// Hacer la petición para poder traer datos de tblPostulantes
export const getApplicants= async () => {
  // paso 1: Traer la coleccion de datos
  const collectionPostulantes = collection(db, "postulante");
  // paso 2: Traer los documentos
  const documentPostulantes = await getDocs(collectionPostulantes);
  // paso 3: Crear un arreglo que guarde los documentos que estamos obteniendo
  const postulantes = documentPostulantes.docs.map((doc) => doc.data());
  //console.log("postulantes",postulantes)
  //solo enviamos el numero de postulantes
  return postulantes;
}


// Hacer la petición para poder traer datos de tblConvocatoria
export const getAnnouncements = async () => {
  // paso 1: Traer la coleccion de datos
  const collectionAnnouncement = collection(db, "convocatoria");
  // paso 2: Traer los documentos
  const documentAnnouncement = await getDocs(collectionAnnouncement);
  // paso 3: Crear un arreglo que guarde los documentos que estamos obteniendo
  const usersAnnouncement = documentAnnouncement.docs.map((doc) => doc.data());
  return usersAnnouncement;
};

// Hacer la petición para poder traer datos de tblCalificacion
export const getQualifications = async () => {
  // paso 1: Traer la coleccion de datos
  const collectionQualification = collection(db, "calificacion");
  // paso 2: Traer los documentos
  const documentQualification = await getDocs(collectionQualification);
  // paso 3: Crear un arreglo que guarde los documentos que estamos obteniendo
  const usersQualification = documentQualification.docs.map((doc) => doc.data());
  return usersQualification;
};

// Peticion de la tabla Academicos
export const getAcademics = async () => {
  // paso 1: Traer la coleccion de datos
  const collectionAcademic = collection(db, "academico");
  // paso 2: Traer los documentos
  const documentAcademic = await getDocs(collectionAcademic);
  // paso 3: Crear un arreglo que guarde los documentos que estamos obteniendo
  const usersAcademic = documentAcademic.docs.map((doc) => doc.data());
  return usersAcademic;
};

export const getPsychological = async() => {
  const collectionPsychological = collection(db, "psicologico");
  const documentPsychological = await getDocs(collectionPsychological);
  const usersPsychological = documentPsychological.docs.map((doc) => doc.data());
  return usersPsychological;
}

  // Hacer la peticion para poder traer las preguntas
  export const getTests= async () => {
    // paso 1: Traer la coleccion de datos
    const collectionTests = collection(db, "test");
    // paso 2: Traer los documentos
    const documentTests = await getDocs(collectionTests);
    // paso 3: Crear un arreglo que guarde los documentos que estamos obteniendo
    const tests = documentTests.docs.map((doc) => doc.data());
    //console.log("mira",tests)
    return tests;
  };

  export const getLabor = async() => {
    const collectionLabor = collection(db, "laboral");
    const documentLabor = await getDocs(collectionLabor);
    const usersLabor = documentLabor.docs.map((doc) => doc.data());
    return usersLabor;
  }

  

  export const registerPostulante = async (idPostulante,postulante) => {
    const id = uuidv4().replaceAll("-", "");
    postulante.id = id;
    postulante.id_postulante = idPostulante;
    await setDoc(doc(db, "postulante", id), postulante);
  };

  export const registerAcademico = async (idPostulante,academico) => {
    const id = uuidv4().replaceAll("-", "");
    academico.id_academico = id;
    academico.id_postulante = idPostulante;
    await setDoc(doc(db, "academico", id), academico);
  };

  export const registerLaboral = async (idPostulante,laboral) => {
    const id = uuidv4().replaceAll("-", "");
    laboral.id_laboral = id;
    laboral.id_postulante = idPostulante;
    await setDoc(doc(db, "laboral", id), laboral);
  };

  export const registerPsicologico = async (idPostulante,psicologico) => {
    const id = uuidv4().replaceAll("-", "");
    psicologico.id_psicologico = id;
    psicologico.id_postulante = idPostulante;
    await setDoc(doc(db, "psicologico", id), psicologico);
  };

  export const registerCalificacion = async (idPostulante,idConvocatoria,calificacion) => {
    const id = uuidv4().replaceAll("-", "");
    calificacion.id_calificacion = id;
    calificacion.id_postulante = idPostulante;
    calificacion.id_convocatoria = idConvocatoria
    await setDoc(doc(db, "calificacion", id), calificacion);
  };

 // actualizar un datos en firebase
 export const updateCalificacion = async (calificacion) => {
  const calificacionRef = doc(db, "calificacion", calificacion.id);
  await updateDoc(calificacionRef, calificacion);
};

// vamos a crear una funcion qu reciba un email y password y cree un cuenta en firebase
export const auth = getAuth();

export const loginUser = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);

    return {
      ok: true,
      data: user,
    };
  } catch (error) {
    return {
      ok: false,
      data: error.message,
    };
  }
};