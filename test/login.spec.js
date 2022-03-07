import signInWithEmailAndPassword from '../src/firebase/auth.js'
import loginUser from '../src/components/login.js'

jest.mock('../src/firebase/auth.js');

describe('myFunction', () => {
  it('loginWithEmailAndPassword', () => {
    expect(typeof signInWithEmailAndPassword).toBe('function');
  });
});

describe('loginWithEmailAndPassword', () => {
  it('debe loguear al usuario que ya tiene una cuenta registrada', (done) => {
    const res = loginUser('email','password');
    res.then(() =>{
      console.log(loginUser.mock);
      expect(signInWithEmailAndPassword.mock.calls[0][1]).toBe('email');
      expect(signInWithEmailAndPassword.mock.calls[0][2]).toBe('password');
      done();
    })
  })
})