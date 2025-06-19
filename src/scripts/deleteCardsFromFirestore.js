// Script para deletar todos os cards da coleção de um usuário específico no Firestore
// Uso: node deleteCardsFromFirestore.js

const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('../../estuda-zatto-firebase-adminsdk-fbsvc-4abbb5de4e.json');

const userId = '7lVk6VjYZXaU559CUCNhm5WVqU13'; // Altere para o userId desejado

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

async function deleteAllCards() {
  const itensRef = db.collection('painel_topicos').doc(userId).collection('itens');
  const snapshot = await itensRef.get();
  if (snapshot.empty) {
    console.log('Nenhum card encontrado para deletar.');
    return;
  }
  const batch = db.batch();
  snapshot.docs.forEach(doc => {
    batch.delete(doc.ref);
  });
  await batch.commit();
  console.log(`${snapshot.size} cards deletados de /painel_topicos/${userId}/itens/`);
}

deleteAllCards().catch(err => {
  console.error('Erro ao deletar cards:', err);
  process.exit(1);
});
