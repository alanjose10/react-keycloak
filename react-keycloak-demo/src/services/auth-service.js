import Keycloak from "keycloak-js";

const _kc = new Keycloak({
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: import.meta.env.VITE_KEYCLOAK_REALM,
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
});

/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */
const initKeycloak = (onAuthenticatedCallback) => {
  _kc.init({
    onLoad: 'login-required',
    // silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
    // pkceMethod: 'S256',
  })
    .then((authenticated) => {
      console.log(_kc.idTokenParsed)
      console.log(_kc.tokenParsed)
      console.log(_kc.idToken)
      console.log(_kc.token)
      if (!authenticated) {
        console.log("user is not authenticated..!");
      }
      onAuthenticatedCallback();
    })
    .catch(console.error);
};

const doLogin = _kc.login;

const doLogout = _kc.logout;

const getIdToken = () => _kc.idToken;

const getAccessToken = () => _kc.token;

const getIdTokenParsed = () => _kc.idTokenParsed;

const isLoggedIn = () => !!_kc.token;

const updateToken = (successCallback) =>
  _kc.updateToken(5)
    .then(successCallback)
    .catch(doLogin);

const getUsername = () => _kc.idTokenParsed?.preferred_username;

const getUserEmail = () => _kc.idTokenParsed?.email;

const hasRole = (roles) => roles.some((role) => _kc.hasRealmRole(role));

const hasAllRole = (roles) => roles.every((role) => _kc.hasRealmRole(role));

const UserService = {
  initKeycloak,
  doLogin,
  doLogout,
  isLoggedIn,
  getAccessToken,
  getIdTokenParsed,
  updateToken,
  getUsername,
  getUserEmail,
  hasRole,
  hasAllRole
};

export default UserService;