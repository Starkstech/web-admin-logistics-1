import firebase from './firebaseInitService'

const logService = {

  all: async () => {
    const db = firebase.firestore();
    return await db.collection('logs').get();
  },

  addLog: async (data) => {
    const db = firebase.firestore();
    // const data = {
    //   activity: "",
    //   companyId: "",
    //   createdAt: "",
    //   latitude: "",
    //   longitude: "",
    //   token: "",
    //   uid: ""
    // }
    return await db.collection('logs').add(data);
  },

  userLog: async (userId) => {
    const db = firebase.firestore();
    return await db.collection('logs').where("uid", "==", userId).get();
  },

  myCompany: async (compId) => {
    const db = firebase.firestore();
    return await db.collection('logs').where("companyId", "==", compId).get();
  },

  staffLog: async (compId, userId) => {
    const db = firebase.firestore();
    return await db.collection('logs').where("companyId", "==", compId).where("uid", "==", userId).get();
  }
}

export default logService
