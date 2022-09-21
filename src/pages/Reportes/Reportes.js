import React from 'react'
import './Reportes.css'
import logo from './components/logo_login.png'

import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Component } from 'react';
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
  

    <br></br>
  

    <div className='divisor'>

    </div>
    <br></br>
    <div className='menudesplegable'>
    

      
    </div>


    <div className='piepagina'>
      <p>MUNICIPIO DE RIOBAMBA- ESPOCH</p>

    </div> 
      
  
  </div>
 
    
    

  );
}


export default Reportes