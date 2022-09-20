import React, {useState} from "react";
import './Login.css';

import { useHistory } from "react-router-dom";
import Title from "./components/Title/Title";

import Input from "./components/Input/Input";




const Login = () =>{

    //creo que se puede usar el user y password para que se puedan ingresar de manera al login
    const [ user, setUser ] = useState ('');
    const [ password, setPassword ] = useState('');
    const [passwordError, setPasswordError ] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [hasError, setHasError] = useState(false);

   

    function handleChange(name, value){
        if(name === 'usuario'){
            setUser(value);
            setHasError(false);
            
        }else{
            if(value.length < 6){
                setPasswordError(true);
                setHasError(false);
            }else{
                setPasswordError(false);
                setPassword(value);
                setHasError(false);
            }
        }
    };

    function ifMatch(param){
        if(param.user.length > 0 && param.password.length >0 ){
            if(param.user === 'Jimmy' && param.password==='123456'){
                const {user, password} = param;
                let ac = {user, password};
                let account = JSON.stringify(ac);
                localStorage.setItem('account', account);
                setIsLogin(true);
            }else{
                setIsLogin(false);
                setHasError(true);
            }
        }else{
            setIsLogin(false);
            setHasError(true);
        }
    }

    function handleSubmit(){
        let account = {user, password}
        if(account){
            ifMatch(account)
        }
    };

    return(
        <div className='login-container'>
            {isLogin ? 
                <div className="home-container">
                    <h1> !Hola, {user}!</h1>
                    <label>Felicidades, estas logueado</label>
                    
                </div>                 
            :
                
                <div className= 'login-content'>
                    <div className="logo-container"></div>
                    
                    <Title text = 'SISTEMA DE GESTION SEGUIMIENTO DE SEGURIDAD Y SALUD OCUPACIONAL' />
                    <Title text = 'INICIO DE SESION' />

                    {hasError &&
                        <label className='label-alert'> Su contrasena o usuario son incorrectas
                                o no existen en la plataforma
                        </label>
                    }
                    {/*<Label text = 'Usuario'/>*/}
                    <Input attribute={{
                        id: 'usuario',
                        name: 'usuario',
                        type: 'text',
                        placeholder: 'Ingrese su usuario'
                    }}
                    handleChange={handleChange}
                    />
                    {/*<Label text = 'Contrasena'/>*/}
                    <Input attribute={{
                        id: 'contrasena',
                        name: 'contrasena',
                        type: 'password',
                        placeholder: 'Ingrese su contrasena'
                    }}
                    handleChange={handleChange}
                    param={passwordError}
                    />
                    
                    {passwordError &&
                    <label className='label-error'> 
                        Contrasena Invalida o incompleta
                    </label>
                    }
                    
                    <div className='submit-button-container'>
                        <button onClick={ handleSubmit } className='submit-button'>
                            Ingresar
                        </button>
                    </div>
                </div>
            }
        </div>
    )
};

export default Login;