import firebase from './firebaseInitService'

const roleService = {
  index: async () => {
    const db = firebase.firestore()
    return await db.collection('roles').get()
  }
}

export default roleService
