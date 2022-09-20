
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const MenuItems = (props) =>{
    
    const  { name, iconClassName, to, exact } = props;
    const [expand, setExpand] = useState(false);
    
    return(
        <li onClick={props.onClick}>
             <NavLink to={to} onClick={()=> setExpand(!expand)} className='menu-item'>
                <div className='menu-icono'>
                    <i class={iconClassName}></i>
                     </div>
                <span>{name}</span>
            </NavLink>
        </li>
    )
}




export default MenuItems