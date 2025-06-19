// Serviço de autenticação Firebase para uso no React (client-side)
// Métodos: loginEmailSenha, loginTelefone
// ATENÇÃO: Não expor dados sensíveis do JSON de credenciais no front-end!

import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';
import { getFirestore, collection, getDocs, addDoc, updateDoc, deleteDoc, doc, setDoc } from 'firebase/firestore';

// Substitua os valores abaixo pelas configurações do seu projeto Firebase (não use o JSON Admin no front-end)
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Inicializa o app Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Login com email e senha
export const loginEmailSenha = async (email, senha) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, senha);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

// Inicializa o Recaptcha (obrigatório para login por telefone)
export const gerarRecaptcha = (elementId) => {
  return new RecaptchaVerifier(elementId, {
    size: 'invisible',
    callback: (response) => {
      // Recaptcha resolvido
    },
  }, auth);
};

// Login com telefone (envia SMS)
export const loginTelefone = async (phoneNumber, appVerifier) => {
  try {
    const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
    return confirmationResult; // Use confirmationResult.confirm(code) para finalizar
  } catch (error) {
    throw error;
  }
};

export const onAuthStateChanged = (callback) => {
  return auth.onAuthStateChanged(callback);
};

export const logoutFirebase = async () => {
  await auth.signOut();
};

// CRUD para tópicos do painel de gestão
const TOPICOS_COLLECTION = 'painel_topicos';

export const getTopicosPainel = async (userId) => {
  // Retorna todos os tópicos do usuário autenticado
  const colRef = collection(db, TOPICOS_COLLECTION, userId, 'itens');
  const snapshot = await getDocs(colRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const addTopicoPainel = async (userId, topico) => {
  const colRef = collection(db, TOPICOS_COLLECTION, userId, 'itens');
  const docRef = await addDoc(colRef, topico);
  return { id: docRef.id, ...topico };
};

export const updateTopicoPainel = async (userId, topicoId, topico) => {
  const docRef = doc(db, TOPICOS_COLLECTION, userId, 'itens', topicoId);
  await setDoc(docRef, topico, { merge: true });
};

export const deleteTopicoPainel = async (userId, topicoId) => {
  const docRef = doc(db, TOPICOS_COLLECTION, userId, 'itens', topicoId);
  await deleteDoc(docRef);
};

export default {
  loginEmailSenha,
  gerarRecaptcha,
  loginTelefone,
  onAuthStateChanged,
  logoutFirebase,
  getTopicosPainel,
  addTopicoPainel,
  updateTopicoPainel,
  deleteTopicoPainel,
};
