import React, { useState}  from 'react';
import { useHistory } from "react-router-dom";

function Login() {
    const [usuario, setUsuario] = useState("");
    const [pass, setPass] = useState("");
    const history =  useHistory();
    
    const loginForm = async (e)=>{
        e.preventDefault();
        try {
            const response =  await fetch("http://localhost:5000/api/login/", { 
                method: "POST",
                body: JSON.stringify({usuario:usuario, pass: pass}),
                headers:{ "Content-Type": "application/json" }
            });
            const data = await response.json();
            document.cookie = `auth-token=Bearer ${data.token}`;
            setTimeout(()=> history.push("/dashboard"), 300);

        } catch(error) {
            console.error(error);
        }
    }

    return (
        <div className="container d-flex justify-content-center mt-5">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Login</h5>
                    <form onSubmit={loginForm}>
                    <div className="form-group">
                        <label>Nombre usuario</label>
                        <input type="text" className="form-control" onChange={(e)=> setUsuario(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Contraseña</label>
                        <input type="password" className="form-control" onChange={(e)=> setPass(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Entrar</button>
                    </form>
                </div>
            </div>
        </div>
    );
  }
  
  export default Login;