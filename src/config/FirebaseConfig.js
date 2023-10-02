import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDqAfbIidzkJUrqKFGs5N4OImzEI6M5Vgg",
  authDomain: "souqdz-e6866.firebaseapp.com",
  projectId: "souqdz-e6866",
  storageBucket: "souqdz-e6866.appspot.com",
  messagingSenderId: "271780211484",
  appId: "1:271780211484:web:2fea457717fcc3c6df68d9",
}

export const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
