const generateImage = (data) => {
  if (data) {
    const prod = data.match(/\b(\w)/g)
    return prod.join('')
  } else {
    return 0
  }
}
export default generateImage
