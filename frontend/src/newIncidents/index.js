import React, {useState} from 'react';
import './styles.css';
import logoimg from '../assets/logo.svg';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'
import api from '../services/api'

export default function NewIncident(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    async function HandleNewIncident(e){
        e.preventDesault();
        const data = {
            title,
            description,
            value,
        };

        try{
            await api.post('incidents',data, {
                headers: {
                    Authorization: ongId,
                }
            })

            history.push('/Profile');
            
        }catch(err){
            alert('Erro ao cadastrar. Por favor, tente novamente.');
        }
    }
    
    return (
        <div className="newincident-container">
            <div className="content">
                <section>
                    <img src={logoimg} alt="Be The Hero"/>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso</p>
                </section>

                <Link className="back-link" to="/Profile">
                    <FiArrowLeft size={16} color="#E02041"/>
                    Voltar para home
                </Link>

                <form onSubmit={HandleNewIncident}>
                    <input placeholder="Título do caso"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    />
                    <textarea placeholder="Descrição"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    />
                    <input placeholder="Valor em reais (R$)"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    />

                   <button className="button" type="submit">Cadastrar</button> 

                </form>
            </div>
        </div>

    );
}