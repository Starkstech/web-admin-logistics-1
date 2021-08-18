import axios from 'axios'
import firebase from './firebaseInitService'
const SERVER_URL = 'http://localhost:3200/'

const authService = {

  createUserAccountApi: (data) => {
    return axios.post(SERVER_URL + 'signup', data)
      .then(res => res.data)
  },

  createUserAccount: (data) => {
    return firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
  },

  createUserDetail: async (data) => {
    const db = firebase.firestore();
    console.log(data)
    return await db.collection('users').add(data);
  },

  loginUser: (data) => {
    return firebase.auth().signInWithEmailAndPassword(data.email, data.password)
  },

  PasswordReset: (data) => {
    return firebase.auth().sendPasswordResetEmail(data.email)
  },
  logoutUser: async () => {
    return await firebase.auth().signOut()
  },

  getAuth: (data) => {
    return firebase.auth().sendPasswordResetEmail(data.email)
  },
  updateUser: async (data, uid) => {
    const db = firebase.firestore();
    const userObj = await db.collection('users').where('uid', '==', uid).get()
    userObj.forEach(user => {
      return db.collection('users').doc(user.id).update(data);
    })
  },
  updateClientRegistrationGeneral: async (data, uid) => {
    const db = firebase.firestore();
    const userObj = await db.collection('users').where('uid', '==', uid).get()
    userObj.forEach(user => {
      return db.collection('users').doc(user.id).update(data);
    })
  },
  updateClientRegistrationPasscode: async (data, uid) => {
    const db = firebase.firestore();
    const userObj = await db.collection('users').where('uid', '==', uid).get()
    userObj.forEach(user => {
      return db.collection('users').doc(user.id).update(data);
    })
  },
  saveGeneralInfo: async (data, uid) => {
    const db = firebase.firestore();
    const userObj = await db.collection('users').where('uid', '==', uid).get()
    userObj.forEach(user => {
      return db.collection('users').doc(user.id).update(data);
    })
  },

  loginClient: (data) => {
    return firebase.auth().signInWithEmailAndPassword(data.email, data.password)
  },
  ClientPasswordReset: (data) => {
    return firebase.auth().sendPasswordResetEmail(data.email)
  },
  ClientPasscode: async (data, uid) => {
    const db = firebase.firestore();
    const user = await db.collection('users').where('uid', '==', uid).where('passcode', '==', data).get()
    console.log(user.docs)
    if (user.docs.length === 1) {
      return true
    } else {
      throw new ClientException('Invalid passcode');
    }
  },
  securityQuestion: async (uid) => {
    const db = firebase.firestore();
    return await db.collection('users').where('uid', '==', uid).get();
  }
}

function ClientException (message) {
  this.message = message;
  this.name = 'ClientException';
}

export default authService
