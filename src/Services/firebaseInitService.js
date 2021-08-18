import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/storage'
import "firebase/database"

const firebaseConfig = {
  apiKey: 'AIzaSyCWx73968VLWqnrlGv8Ty7xogc9AT-5FGA',
  authDomain: 'omanl-de803.firebaseapp.com',
  databaseURL: "https://omanl-de803.firebaseio.com",
  projectId: 'omanl-de803',
  storageBucket: 'omanl-de803.appspot.com',
  messagingSenderId: '528986031541',
  appId: '1:528986031541:web:d364cf3eb714fcb9d1c5fc',
  measurementId: 'G-8M2P7MHPVG'
}

firebase.initializeApp(firebaseConfig)
export default firebase
