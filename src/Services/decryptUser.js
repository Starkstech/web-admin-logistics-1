import CryptoJS from 'crypto-js'

const decryptUser = user => {
  const encUser = CryptoJS.AES.decrypt(user.currentUser, '12345')
  const decryptedUser = JSON.parse(encUser.toString(CryptoJS.enc.Utf8))
  const accessToken = decryptedUser.access_token

  return (
    accessToken
  )
}

export default decryptUser;
