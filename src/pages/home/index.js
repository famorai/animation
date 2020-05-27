import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Main from '../main/index';

import "./styles.css";

export default class Home extends Component {
  state = {
    page: {Main},
    home: {
      title  : ("As melhores oportunidades de investimentos, direto ao ponto e do  jeito certo."),
      description : ("No meio de tanta informação e da quantidade de modalidades surgindo todos os dias, você precisa de alguém que te leve na direção certa. Acesse agora.")
    },
  };

  Routes = () => (
    <BrowserRouter>
    <Switch>
      <Route path='/main' component={Main} />
    </Switch>
    </BrowserRouter>
   );

  render() {
    const { home } = this.state;

   return (
     <div className="home">
       <strong>{home.title}</strong>
        <p>{home.description}</p>
               
        <button onClick={this.Routes}
        >Acessar</button>
     </div>
   );
  }
}