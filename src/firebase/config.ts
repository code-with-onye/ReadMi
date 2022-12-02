
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

export const firebaseConfig = {
  apiKey: "AIzaSyDG65nGaBanzLtkRFoPFmhYiE2zl8NvOHk",
  authDomain: "rateme-321aa.firebaseapp.com",
  projectId: "rateme-321aa",
  storageBucket: "rateme-321aa.appspot.com",
  messagingSenderId: "879425305474",
  appId: "1:879425305474:web:16ede7df8fc0ab772a6d9b",
  measurementId: "G-2S0ZNDDNB0",
};


const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)
export { db, auth }