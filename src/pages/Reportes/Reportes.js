import React from 'react'
import './Reportes.css'
import estadisticas from './components/estadistica.png'
import logo from './components/logo_login.png'


import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Gestion, {Gestiion} from './components/Gestion_talento';
import { NavDropdown } from 'react-bootstrap';
const Reportes = () => {
 
  return (

    <div className=''>
      <div className='encabezado'>
        <div className='logoprovincia'>
        <img src={logo} width={'100%'} height={'100%'}/>
        </div>

        <div className='tituloreporte'>
        <p>GOBIERNO AUTÓNOMO DESCENTRALIZADO MUNICIPAL DEL CANTÓN RIOBAMBA </p>
        <p>SUBPROCESO DE DESARROLLO INSTITUCIONAL  </p>
        <p>INDICADORES DE GESTIÓN </p>
    </div>
      </div>
      <div className='botton'>
  </div>
 
    <div className='divisor'>
      
    </div>

    <br></br>
    <div className='menudesplegable'>
      <div className='minimenu'>
      <div className='desplegable'>

<br></br>

<button className='boton'>GESTIÓN DE TALENTO HUMANO Y DESARROLLO INSTITUCIONAL </button>
<div className='links'>
 

<a href='Gestion_Talento'>Seguridad Ocupacional</a>
<a href='Gestion_Talento'>Salud Ocupacional</a>
<a href='Gestion_Talento'>Formación y Capacitación</a>
<a href='Gestion_Talento'>Remuneraciones</a>
<a href='Gestion_Talento'>Administración del Talento</a>
<a href='Gestion_Talento'>Desarrollo Institucional</a>
<a href='Gestion_Talento'>Atención Cuidadana</a>

</div>

</div>


<div className='desplegable2'>
<br></br>

<button className='boton2'>GESTIÓN FINANCIERA </button>  
<div className='links'>
 

<a href='Gestion_Finaciera'>Rentas</a>
<a href='Gestion_Finaciera'>Tesoreria</a>
<a href='Gestion_Finaciera'>Contabilidad</a>


</div>

</div>

<div className='desplegable3'>

<br></br>

<button className='boton3'>GESTIÓN DE COMUNICACIÓN </button>    
<div className='links'>
 

<a href='Gestion_Comunicacion'>Imprenta Municipal</a>

</div>


</div>
        
    
      </div>

      <br></br>
      <div className='estadisticas'>
    <img src={estadisticas} width={'100%'} height={'100%'}/>

    </div>
    </div>

      
    <div className='piepagina'>
      <p>MUNICIPIO DE RIOBAMBA- ESPOCH</p>

    </div> 
      
 
  
  </div>   


  );
}


export default Reportes