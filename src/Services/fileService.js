import { useLoggedInUser } from '../Hooks';
import firebase from './firebaseInitService'

const fileService = {

  uploadOrgLogo: async (file) => {
    const metadata = {
      contentType: "image/jpeg"
    };
    return firebase.storage().ref().child(file[0].name).put(file[0], metadata).snapshot.ref.getDownloadURL();
  },
  uploadProfileo: async (file) => {
    const metadata = {
      contentType: "image/jpeg"
    };
    const userObj = useLoggedInUser()
    const reName = userObj.uid + '.png'
    return firebase.storage().ref().child(`profilePhoto/${reName}`).put(file[0], metadata).snapshot.ref.getDownloadURL();
  },
  uploadBase64: async (file, name, token) => {
    const metadata = {
      contentType: "image/png"
    };
    const reName = name + '.png'
    const storageRef = firebase.storage().ref().child(`qrcodes/${token}/${reName}`)

    await storageRef.putString(file, 'data_url', metadata)

    return await storageRef.getDownloadURL().then((downloadURL) => (downloadURL))
  }
}
export default fileService
