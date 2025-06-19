// Script para importar cards do arquivo JSON para o Firestore na coleção de um usuário específico
// Uso: node importCardsToFirestore.js

const fs = require('fs');
const path = require('path');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

// Caminho do arquivo JSON com os cards
const cardsPath = path.join(__dirname, '../../public/cards.json');
const userId = '7lVk6VjYZXaU559CUCNhm5WVqU13';

// Inicialize o Firebase Admin SDK (requer credenciais de serviço!)
// Veja: https://firebase.google.com/docs/admin/setup
const serviceAccount = require('../../estuda-zatto-firebase-adminsdk-fbsvc-4abbb5de4e.json');

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

async function importCards() {
  const raw = fs.readFileSync(cardsPath, 'utf-8');
  const cards = JSON.parse(raw);
  const batch = db.batch();

  cards.forEach((card, idx) => {
    // Garante que o campo 'ordem' será sempre incluído, começando de 1 caso não exista
    const ordem = card.ordem !== undefined ? card.ordem : idx + 1;
    const docRef = db.collection('painel_topicos').doc(userId).collection('itens').doc();
    batch.set(docRef, { ...card, ordem });
  });

  await batch.commit();
  console.log(`${cards.length} cards importados para /painel_topicos/${userId}/itens/`);
}

importCards().catch(err => {
  console.error('Erro ao importar cards:', err);
  process.exit(1);
});
