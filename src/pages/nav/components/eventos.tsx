import React from 'react';
import './eventos.css'
import Button from 'react-bootstrap/Button';
import FormDialog from './dialog';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
//datos
const rows: GridRowsProp = [
  { id: 1, col1: '0604704403', col2: 'Hector', col3: '2014-02-5', col4: 'Pediente' },
  { id: 2, col1: '0604704987', col2: 'Paco', col3: '2018-2-32', col4: 'En Seguimiento' },
  { id: 4, col1: '0604704201', col2: 'Fabian', col3: '2014-2-21', col4: 'Pendiente' },
  { id: 5, col1: '0604704896', col2: 'Jimmy', col3: '2022-12-12', col4: 'Terminado'},
  { id: 6, col1: '0604704213', col2: 'Luis', col3: '2022-11-11', col4: 'Cancelado'},
  { id: 7, col1: '0604704123', col2: 'Eduardo', col3: '2022-05-4', col4: 'Finalizado'},
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Cedula', width: 250 },
  { field: 'col2', headerName: 'Nombre', width: 250 },
  { field: 'col3', headerName: 'Fecha Evento', width: 250 },
  { field: 'col4', headerName: 'Estado', width: 250 }
];

export default function Eventos() {
  return (
    <div className='grid'>
      <div className='tituloeventos'>
      <h1>Eventos </h1>
      </div>
      <br></br>
      <div className='infoEventos'>
      <a>Bienvenidos al sistema de SSO del Municipio de Riobamba.<br/></a>
      <a>Para filtrar los datos, ubicate en la tabla y da click en los tres puntos y podras filtrar segun convenga.</a>
      
      </div>
      <br></br>
      <div className='divisor'>

      </div>
      <br></br>
    <div style={{ display: 'flex', height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>

 

    <div className='footerEventos'>
      <br></br>
      <button>Registrar Nuevo Evento</button>
    </div>
    
    </div>
    
  );
}
