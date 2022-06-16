import React from "react";
import ContactPageIcon from '@mui/icons-material/ContactPage';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import TodayIcon from '@mui/icons-material/Today';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const Academic = ({ acade }) => {
    return(
        <>
            <div className="div">
                <div className="container-icon-title">
                    <ContactPageIcon />
                    <h4 className="titulo-icon">Area Profesional:</h4>
                </div>
                <span>
                    {acade?.area_profesional}
                </span>
            </div>

            <div className="div">
                <div className="container-icon-title">
                    <SchoolIcon />
                    <h4 className="titulo-icon">Centro de estudios:</h4>
                </div>
                <span>
                     {acade?.centro_estudios}  
                </span>
            </div>
            <div className="div">
                <div className="container-icon-title">
                    <MenuBookIcon />
                    <h4 className="titulo-icon">Curso Adicional: </h4>
                </div>
                <span>
                     {acade?.curso_adicional_1}  
                </span>
            </div>
            <div className="div">
                <div className="container-icon-title">
                    <MenuBookIcon />
                    <h4 className="titulo-icon">Curso Adicional:</h4>
                </div>
                <span>
                     {acade?.curso_adicional_2}  
                </span>
            </div>
           {/** <div className="div">
                <div className="container-icon-title">
                    <TodayIcon />
                    <h4 className="titulo-icon">Fecha de Egreso</h4>
                </div>
                <span>
                     {+acade.fecha_egreso}  
                </span>
            </div> */}
            <div className="div">
                <div className="container-icon-title">
                    <SchoolIcon />
                    <h4 className="titulo-icon">Nivel Academico</h4>
                </div>
                <span>
                     {acade?.nivel_academico}  
                </span>
            </div>
            <div className="div">
                <div className="container-icon-title">
                    <LibraryBooksIcon />
                    <h4 className="titulo-icon">Nivel de Ingles:</h4>
                </div>
                <span>
                     {acade?.nivel_ingles}  
                </span>
            </div>
            <div className="div">
                <div className="container-icon-title">
                    <SchoolIcon />
                    <h4 className="titulo-icon">Profesion</h4>
                </div>
                <span>
                     {acade?.profesion}  
                </span>
            </div>
        </>

    );
}

export default Academic;