import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, getDocs, query, collection, writeBatch } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAsc7ufR3ku7Mmy6uKsqPj8_GYJVWtLXW0",
    authDomain: "big-two-8161e.firebaseapp.com",
    projectId: "big-two-8161e",
    storageBucket: "big-two-8161e.appspot.com",
    messagingSenderId: "913007534015",
    appId: "1:913007534015:web:654bbac201440a58f60b0a"
  };

const firebaseApp = initializeApp(firebaseConfig);

const providerGoogle = new GoogleAuthProvider();

providerGoogle.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, providerGoogle);

export const db = getFirestore();

//TO ADD//
export const addProductsAndItems = async (collectionName, objectsToAdd) => {
    const collectRef = collection(db, collectionName);
    const batch = writeBatch(db);

    objectsToAdd.forEach(object => {
        const docRef = doc(collectRef, object.title.toLowerCase())
        batch.set(docRef, object)
    });
    await batch.commit();
}

export const getProductsAndItems = async () => {
    const collectionRef = collection(db, 'kleo4you');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => doc.data())
} 

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

    return userSnapshot;
}

export const createAuthWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => {
    return await signOut(auth);
}

export const onAuthStateChangedListener = (callback) => {
    return onAuthStateChanged(auth, callback);
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(
            auth,
            (userAuth) => {
                unsubscribe();
                resolve(userAuth);
            },
            reject
        )
    })
}