import firebase from './firebaseInitService'

const groupService = {

  allChannel: async (id) => {
    const db = firebase.firestore();
    return await db.collection('conversation').where('type', '==', 2).get();
  },
  getChannel: async (channelId) => {
    const db = firebase.firestore();
    return await db.collection('messages').doc(channelId).collection('chats').get();
  },
  createChannel: async (data) => {
    const db = firebase.firestore();
    return await db.collection('conversation').add(data);
  },
  addParticipant: async (id, data) => {
    const db = firebase.firestore();
    await db.collection('conversation').doc(id).update(
      { participants: firebase.firestore.FieldValue.arrayUnion(...data) }
    )
  },
  myGroup: async () => {
    const user = await firebase.auth().currentUser;
    const db = firebase.firestore();
    return await db.collection('conversation').where('participants.uid', 'array-contains', user.uid).where('type', '==', 2).get();
  }
}

export default groupService
