import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAvV5r6cCWbqOdiiOtya-M9GgtrvF-UTyc",
    authDomain: "tienda-bonachona.firebaseapp.com",
    projectId: "tienda-bonachona",
    storageBucket: "tienda-bonachona.appspot.com",
    messagingSenderId: "688324157718",
    appId: "1:688324157718:web:9677705500cf82d3af3037"
  };

  const app = initializeApp(firebaseConfig)

  export const db = getFirestore(app)