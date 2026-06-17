import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
  query,
  where
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDXKRI9-ddGS4UHGyhzGqigNupWKgoKDpM",
  authDomain: "bolao-copa-2026-99146.firebaseapp.com",
  projectId: "bolao-copa-2026-99146",
  storageBucket: "bolao-copa-2026-99146.firebasestorage.app",
  messagingSenderId: "286147851511",
  appId: "1:286147851511:web:7039d87a78cc9d33f68ff2"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {
  db,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
  query,
  where
};

console.log("Firebase conectado com sucesso!");

async function testarFirestore() {
  try {
    const snapshot = await getDocs(
      collection(db, "participantes")
    );

    snapshot.forEach((documento) => {
      console.log(documento.id, documento.data());
    });

  } catch (erro) {
    console.error("Erro Firestore:", erro);
  }
}

testarFirestore();