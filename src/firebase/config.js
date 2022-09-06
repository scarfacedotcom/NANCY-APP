import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCxeG40_AiLtDYvUC_G28XSUo5Qctz9Co4",
  authDomain: "the-nancy-app.firebaseapp.com",
  projectId: "the-nancy-app",
  storageBucket: "the-nancy-app.appspot.com",
  messagingSenderId: "1631171075",
  appId: "1:1631171075:web:bf399868ac064759ed1436"
};

// init app
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }