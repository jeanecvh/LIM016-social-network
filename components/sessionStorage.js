export const userDataLocally = () => {
    const userSession = sessionStorage.getItem('user');
    const userSessionObjet = JSON.parse(userSession);
    return userSessionObjet;
  }
  