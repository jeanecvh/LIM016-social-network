const auth = jest.fn();
auth.currentUser = {
  uid: 'fake-user-id',
};
const loginWithEmailAndPassword = jest.fn(() => Promise.resolve(() => {
    const user = newLocal;
    return user;
  }));

 export {
    auth,
    loginWithEmailAndPassword
 } 