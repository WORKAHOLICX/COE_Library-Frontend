import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyACo_UcISympT3WUpHHr1ZN0skEBUp6cL4",
    authDomain: "thvl-discussion-forum.firebaseapp.com",
    projectId: "thvl-discussion-forum",
    storageBucket: "thvl-discussion-forum.appspot.com",
    messagingSenderId: "207289021532",
    appId: "1:207289021532:web:c1a67e718238829a18a299",
    measurementId: "G-MCRV5KVB77"
};

const app = initializeApp(firebaseConfig)

const db = getFirestore(app);

export { db }