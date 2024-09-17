const Realm = require("realm-web");

const app = new Realm.App({ id: "data-yqqjxmm" });

async function login(email, password) {
  const credentials = Realm.Credentials.emailPassword(email, password);
  const user = await app.logIn(credentials);
  console.assert(user.id === app.currentUser.id);
  return user.accessToken;
}

module.exports = { login };
