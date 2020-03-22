import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";


function Home() {
    const [usuario, setUsuario] = useState("");
    const [pass, setPass] = useState("");
    const history =  useHistory();
  
    const submitForm = async (e)=>{
        e.preventDefault();
        try {
            const response =  await fetch("http://localhost:5000/api/register/",{ 
                method: "POST",
                body: JSON.stringify({usuario: usuario, pass: pass}),
                headers:{ 'Content-Type': 'application/json' }
            });
            const data = await response.json();
            history.push("/dashboard");
            console.log(data);
        } catch(error) {
            console.error(error.message);
        }
    }

    return (
        <div className="container d-flex justify-content-center mt-5">
            <div className="card">
                <div className="card-body">
                <h5 className="card-title">Registrarse</h5>
                    <form onSubmit={submitForm}>
                    <div className="form-group">
                        <label>Nombre usuario</label>
                        <input type="text" className="form-control" onChange={(e)=> setUsuario(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Contraseña</label>
                        <input type="password" className="form-control" onChange={(e)=> setPass(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Registrate</button>
                    <p className="text-center mt-3">o <Link to="/login">Logeate</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home;