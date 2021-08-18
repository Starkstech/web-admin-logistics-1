import firebase from './firebaseInitService'

const userService = {

  allUsers: async () => {
    const db = firebase.firestore()
    return await db.collection('users').get()
  },
  oneUsers: async (id) => {
    const db = firebase.firestore()
    return await db.collection('users').doc(id).get()
  },
  getUser: async (id) => {
    const db = firebase.firestore()
    return await db.collection('users').where('uid', '==', id).get()
  },

  uniqueUser: async (email) => {
    const db = firebase.firestore()
    return await db.collection('users').where('email', '==', email).get()
  },

  getStaff: async (id) => {
    const db = firebase.firestore()
    return await db.collection('users').doc(id).get()
  },
  getOrganisationStaff: async (id) => {
    const db = firebase.firestore()
    return await db.collection('users').where('company', 'array-contains-any', [id]).get()
  },
  getUserPoints: async (companyId) => {
    const db = firebase.firestore()
    return await db.collection('users').where('company', 'array-contains', companyId).where('totalPoint', '>', 1).get()
  },

  searchUsers: async (queryText) => {
    const db = firebase.firestore()
    return await db.collection('users').orderBy('name').startAt(queryText).endAt(queryText + '\uf8ff').get()
  },
  suspendUser: async (id) => {
    const db = firebase.firestore()
    return await db.collection('users').doc(id).update({ active: false })
  },
  unSuspendUser: async (id) => {
    const db = firebase.firestore()
    return await db.collection('users').doc(id).update({ active: true })
  },
  addUserToOrganisation: async (uid, companyId) => {
    const db = firebase.firestore()
    const userObj = await db.collection('users').where('uid', '==', uid).get()
    userObj.forEach(user => {
      return db.collection('users').doc(user.id).update({
        company: firebase.firestore.FieldValue.arrayUnion(companyId)
      })
    })
  },
  searchStaff: async (companyId, queryText) => {
    const db = firebase.firestore()
    return (await db.collection('users')
      // .where("company", "array-contains", companyId)
      .where('company', 'array-contains-any', companyId)
      .orderBy('name')
      .startAt(queryText)
      .endAt(queryText + '\uf8ff')
      .get())
  },
  updateUserHistory: async (data, id) => {
    // User data object structure
    // const data = {
    //   education: [{ ...data, createdAt: new Date() }]
    // }

    const db = firebase.firestore()
    // lets check if key [education, etc] exist else create
    const arrayKey = Object.keys(data)[0]
    // console.log('user arrayKey', arrayKey)
    const check = await db.collection('users').doc(id).get()
    const sata = check.data()?.[arrayKey]
    // console.log("USER EDUCOM SAVE", id)
    if (sata) {
      // serialised data before save
      const newData = data?.[arrayKey][0]
      return await db.collection('users').doc(id).update({
        [arrayKey]: firebase.firestore.FieldValue.arrayUnion(newData)
      })
    } else {
      return await db.collection('users')
        .doc(id)
        .set(data, { merge: true })
    }
  },
  updateUser: async (data, id) => {
    const db = firebase.firestore()
    return await db.collection('users').doc(id).update(data)
  },

  updateAuth: async (data, id) => {
    const user = await firebase.auth().currentUser
    const db = firebase.firestore()
    await db.collection('users').doc(id).update(data)
    return await user.updateProfile(data)
  }
}

export default userService
