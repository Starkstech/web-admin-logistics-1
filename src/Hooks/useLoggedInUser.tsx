const useLoggedInUser = () => {
  const loggedIn:any = localStorage.getItem('__session');
  return loggedIn ? JSON.parse(loggedIn) : null;
}
export default useLoggedInUser
