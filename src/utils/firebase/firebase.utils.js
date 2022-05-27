import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAsc7ufR3ku7Mmy6uKsqPj8_GYJVWtLXW0",
    authDomain: "big-two-8161e.firebaseapp.com",
    projectId: "big-two-8161e",
    storageBucket: "big-two-8161e.appspot.com",
    messagingSenderId: "913007534015",
    appId: "1:913007534015:web:654bbac201440a58f60b0a"
  };

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = { }) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const userDateCreat = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                userDateCreat,
                ...additionalInfo,
            })
        } catch(error) {
            console.log('ERROR TO FIX', error.message)
        }
    }
    return console.log(userSnapshot)
}

export const createAuthWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}