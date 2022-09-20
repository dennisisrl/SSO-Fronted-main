import './index.css'
import logo from './components/logo_gadm_riobamba.png'
import logoSegundo from './components/log_gad_segundo.png'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import MenuItems from './components/MenuItems';
import { useEffect } from 'react';



const menusItems =[
    {name: 'Mis Datos', exact: true, to: '/misdatos', iconClassName: 'bi bi-person-circle'},
    {name: 'Eventos', exact: true, to: '/eventos', iconClassName: 'bi bi-bandaid-fill'},
    {name: 'Reportes', exact: true, to: '/Reportes', iconClassName: 'bi bi-file-earmark-bar-graph-fill'}
];

const Barra = (props) =>{

    const [inactive, setInactive] = useState(false);

    useEffect(()=>{
        props.onCollapse(inactive);
    }, [inactive]);

    return(
        <div className={`side-menu ${inactive ? "inactive" : ""}`}>
            <div className='top-section'>
                
                <div className='logo-gadm'>
                    <img src={logoSegundo} alt='GADMRIOBAMBA'></img>
                </div>

                <div onClick={() => setInactive(!inactive)} className='flecha-atras-menu'>
                    {inactive ? (<i class="bi bi-arrow-right-circle-fill"></i>)
                     : 
                     (<i class="bi bi-arrow-left-circle-fill"></i>)}
                    </div>
            </div>


            <div className='divider'>
               
            </div>

            <div className='menu-principal'>
                <ul>
                 {
                        menusItems.map((menusItems, index)=>(
                            <MenuItems
                                key={index}
                                name={menusItems.name}
                                exact={menusItems.exact}
                                to={menusItems.to}
                                iconClassName={menusItems.iconClassName}
                                onClick={()=>{
                                    if(inactive){
                                        setInactive(false);
                                    }
                                }}
                            />
                        ))
                    }
                    {/*
                    <li>
                        <NavLink exact to='/misdatos' className='menu-item'>
                            <div className='menu-icono'>
                                <i class="bi bi-person-circle"></i>
                                </div>
                            <span>Mis Datos</span>
                            </NavLink>
                    </li>

                    <li>
                        <NavLink to='/eventos' exact className='menu-item'>
                            <div className='menu-icono'>
                                 <i class="bi bi-bandaid-fill"></i>
                                </div>
                                <span>Evento</span>
                                </NavLink>
                    </li>
                */}
                </ul>
            </div>

            <div className='side-menu-footer'>
                <div className='exit-footer'><i class="bi bi-box-arrow-left"></i></div>
                <div className='exit'>
                    <h5>Salir</h5>
                </div>
            </div>
        </div>
    )
}

export default Barra