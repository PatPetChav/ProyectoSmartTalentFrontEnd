import React from "react";
import WorkIcon from '@mui/icons-material/Work';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

const Laboral = ({ work }) => {
    return(
        <>
            <div className="div">
                <div className="container-icon-title">
                    <PendingActionsIcon />
                    <h4  className="titulo-icon">Descripcion:</h4>
                </div>
                <span>
                        {work.breve_descripcion_actividad}   
                </span>
            </div>
            <div className="div">
                <div className="container-icon-title">
                    <WorkIcon />
                    <h4 className="titulo-icon">Cargo Desempeñado:</h4>
                </div>
                <span>
                        {work?.cargo_desempenho}   
                </span>
            </div>
            <div className="div">
                <div className="container-icon-title">
                    <EmojiTransportationIcon />
                    <h4 className="titulo-icon">Dirreccion del Trabajo:</h4>
                </div>
                <span>
                        {work?.direccion}   
                </span>
            </div>
             {/**<div className="div">
                <div className="container-icon-title">
                    <DateRangeIcon />
                    <h4 className="titulo-icon">Fecha de Inicio:</h4>
                </div>
                <span>
                        {+work.fecha_inicio}   
                </span>
            </div>
           <div className="div">
                <div className="container-icon-title">
                    <DateRangeIcon />
                    <h4 className="titulo-icon">Fecha de Culminacion</h4>
                </div>
                <span>
                        {work.fecha_termmino}   
                </span>
            </div> */}
            <div className="div">
                <div className="container-icon-title">
                    <CorporateFareIcon />
                    <h4 className="titulo-icon">Nombre de la empresa: </h4>
                </div>
                <span>
                        {work?.nombre_empresa}   
                </span>
            </div>
            <div className="div">
                <div className="container-icon-title">
                    <AccountTreeIcon />
                <h4 className="titulo-icon">R.U.C:</h4>
                </div>
                <span>
                        {work?.ruc}   
                </span>
            </div>
            <div className="div">
                <div className="container-icon-title">
                    <PhoneIphoneIcon />
                    <h4 className="titulo-icon">Telefono:</h4>
                </div>
                <span>
                        {work?.telefono}   
                </span>
            </div>
            <div className="div">
                <div className="container-icon-title">
                    <WorkHistoryIcon />
                    <h4 className="titulo-icon">Tiempo:</h4>
                </div>
                <span>
                        {work?.tiempo}   
                </span>
            </div>
        </>
    );
}

export default Laboral;