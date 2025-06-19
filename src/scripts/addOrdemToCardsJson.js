// Script para adicionar a propriedade 'ordem' sequencialmente em cada card do arquivo cards.json
// Uso: node addOrdemToCardsJson.js

const fs = require('fs');
const path = require('path');

const cardsPath = path.join(__dirname, '../../public/cards.json');

function addOrdem() {
  const raw = fs.readFileSync(cardsPath, 'utf-8');
  const cards = JSON.parse(raw);
  const cardsComOrdem = cards.map((card, idx) => ({ ...card, ordem: idx + 1 }));
  fs.writeFileSync(cardsPath, JSON.stringify(cardsComOrdem, null, 4), 'utf-8');
  console.log(`Adicionada propriedade 'ordem' (1 a ${cardsComOrdem.length}) em todos os cards.`);
}

addOrdem();
