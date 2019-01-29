import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormMain from './components/form-main';

class App extends Component {
  render() {
    return (
      <div className="App page">
        <div class="header ">
          <header class="page-header ">
            <div class="page-header__inner">
              <a class="page-header__logo" href="https://www.whatsapp.com"></a>
              Not Official Site
            </div>
          </header>
        </div>
        <div class="page-main">
          <div class="page-main__inner">
              <div class="page-content page-content--single">
              <div class="block block--send">
                <h1 id="action-title" class="block__title">Open WhatsApp Web or Mobile</h1>
                <FormMain />        
              </div>
              </div>
          </div>
        </div>
      </div >
    );
  }
}

export default App;
