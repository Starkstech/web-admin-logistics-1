import firebase from './firebaseInitService'

const settingsService = {

  allSecurityQuestion: async () => {
    const db = firebase.firestore()
    return await db.collection('settings').get()
  }
}

export default settingsService
