import auth0 from "auth0-js";

const socialAuth0 = new auth0.WebAuth({
  domain: process.env.REACT_APP_DOMAIN,
  audience: process.env.REACT_APP_AUDIENCE,
  clientID: process.env.REACT_APP_CLIENTID,
  redirectUri: process.env.REACT_APP_LOGIN_REDIRECT,
  responseType: "id_token",
  scope: "openid profile email",
});

class Auth {
  constructor(auth = socialAuth0) {
    this.auth0 = auth;
  }

  signIn = () => {
    this.auth0.authorize();
  };

  handleAuthentication = () => {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (err || !authResult || !authResult.idToken) {
          return reject(err);
        }
        if (authResult && authResult.idToken) {
          localStorage.setItem("jwtToken", authResult.idToken);
        }
        resolve();
      });
    });
  };
  socialAuthHandler = async () => {
    if (!localStorage.getItem("jwtToken")) {
      await this.handleAuthentication();
    }
  };
  logout = () => {
    this.auth0.logout({
      returnTo: process.env.REACT_APP_LOGOUT_REDIRECT,
      clientID: process.env.REACT_APP_CLIENTID,
    });
    localStorage.removeItem("jwtToken");
  };
}

const auth0Client = new Auth();

export default auth0Client;
