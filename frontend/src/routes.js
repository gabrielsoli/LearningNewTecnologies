import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Logon from './pages/Logon';
import Register from './register';
import Profile from './Profile';
import NewIncident from './newIncidents';

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component = {Logon}/>
            <Route path="/register" component = {Register}/>
            <Route path="/Profile" component = {Profile}/>
            <Route path="/new" component = {NewIncident}/>
        </Switch>
        
        </BrowserRouter>

    );
}