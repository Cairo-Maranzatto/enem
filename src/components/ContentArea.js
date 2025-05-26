import React from 'react';

const ContentArea = ({ selectedUrl }) => {
  return (
    <div className="main-content">
      {!selectedUrl ? (
        <div id="welcomeMessage">
          <h1>Bem-vindo à Plataforma de Estudos ENEM!</h1>
          <p>Selecione um tópico no menu à esquerda para começar seus estudos.</p>
        </div>
      ) : (
        <iframe 
          src={selectedUrl} 
          name="contentFrame" 
          id="contentFrame" 
          frameBorder="0" 
          title="Conteúdo do Estudo"
          style={{ width: '100%', height: '100%' }}
        ></iframe>
      )}
    </div>
  );
};

export default ContentArea;
