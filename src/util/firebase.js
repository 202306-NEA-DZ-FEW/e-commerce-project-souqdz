// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfx4zMpGy3w_n8i5EB50a21xHNGkZAjz4",
  authDomain: "souqdz-3a6f8.firebaseapp.com",
  projectId: "souqdz-3a6f8",
  storageBucket: "souqdz-3a6f8.appspot.com",
  messagingSenderId: "908393860501",
  appId: "1:908393860501:web:ae31ca03e3b3c9c51dba9c",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app)
