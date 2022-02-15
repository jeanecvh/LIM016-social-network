export const userDataLocally = () => {

    const userSession = sessionStorage.getItem('user');
    const userSessionOBjet = JSON.parse(userSession);
    return userSessionOBjet;
  }
  