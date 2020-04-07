import React, {useState} from 'react';
import './styles.css';

import heroesimg from '../../assets/heroes.png';
import logoimg from '../../assets/logo.svg';
import {FiLogIn} from 'react-icons/fi';
import {Link, useHistory} from 'react-router-dom';
import api from '../../services/api';

export default function Logon(){

    const [id,setId] = useState('');
    const history = useHistory();

   async function handleLogin(e){
        e.preventDefault();
        try{
            const response = await api.post('sessions', {id});

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongNome', response.data.nome);

            history.push('/Profile');

        }catch(err){
            alert('Não encontramos ONGs com esse Id. Verifique se o Id está correto.');

        }
    }
    return(
    <div className="logon-container">
        <section className="form">
            <img src={logoimg} alt="Be the Hero"/>

            <form onSubmit={handleLogin}>
                <h1>Faça seu Login</h1>

                <input placeholder="id"
                value={id}
                onChange={e =>setId(e.target.value)}
                />
                <button className = "button" type="submit">Entrar</button>

                <Link className="back-link" to="/register">
                    <FiLogIn size={16} color="#E02041"/>
                    Não tenho cadastro
                </Link>
                
            </form>

        </section>

        <img src={heroesimg} alt="Heroes"/>

    </div>
    );
}