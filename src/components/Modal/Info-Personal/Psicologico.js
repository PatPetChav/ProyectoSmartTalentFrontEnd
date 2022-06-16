import React from "react";
import EngineeringIcon from '@mui/icons-material/Engineering';

const Psicologico = ({ psy }) => {
    return(
        <>
            <div className="div">
                <div className="container-icon-title">
                    <EngineeringIcon />
                    <h4 className="titulo-icon">Calificacion Psicologica:</h4>
                </div>
                <span>
                    {psy?.calificacion}
                </span>
            </div>
        </>
    );
}
export default Psicologico;