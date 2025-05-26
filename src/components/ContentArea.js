import React from 'react';

const ContentArea = ({ selectedUrl }) => {
  // Se selectedUrl já começa com '/', não precisamos de uma barra extra.
  // Se selectedUrl for uma URL completa (http/https), PUBLIC_URL não deve ser prefixado.
  // Assumindo que selectedUrl é sempre um caminho local como '/material_estudo/...'
  const iframeSrc = selectedUrl.startsWith('http') ? selectedUrl : `${process.env.PUBLIC_URL}${selectedUrl}`;
  return (
    <div className="main-content">
      {!selectedUrl ? (
        <div id="welcomeMessage">
          <h1>Bem-vindo à Plataforma de Estudos ENEM!</h1>
          <p>Selecione um tópico no menu à esquerda para começar seus estudos.</p>
        </div>
      ) : (
        <iframe 
          src={iframeSrc} 
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
