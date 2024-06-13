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
      console.log('ID token parsed')
      console.log(_kc.idTokenParsed)
      console.log('Access token parsed')
      console.log(_kc.tokenParsed)
      if (!authenticated) {
        console.log("user is not authenticated..!");
      }
      onAuthenticatedCallback();
    })
    .catch(console.error);
};

const isLoggedIn = () => !!_kc.token;

const doLogin = _kc.login;
const doLogout = _kc.logout;

const getIdToken = () => _kc.idToken;
const getIdTokenParsed = () => _kc.idTokenParsed;

const getAccessToken = () => _kc.token;
const getAccessTokenParsed = () => _kc.tokenParsed;

const updateToken = (successCallback) =>
  _kc.updateToken(5)
    .then(successCallback)
    .catch(doLogin);

const getUsername = () => _kc.idTokenParsed?.preferred_username;
const getUserEmail = () => _kc.idTokenParsed?.email;

const hasAnyRealmRole = (roles) => roles.some((role) => _kc.hasRealmRole(role));
const hasAllRealmRole = (roles) => roles.every((role) => _kc.hasRealmRole(role));

const hasAnyClientRole = (roles) => roles.some((role) => _kc.hasResourceRole(role, import.meta.env.VITE_KEYCLOAK_CLIENT_ID));
const hasAllClientRole = (roles) => roles.every((role) => _kc.hasResourceRole(role, import.meta.env.VITE_KEYCLOAK_CLIENT_ID));

const UserService = {
  initKeycloak,
  doLogin,
  doLogout,
  isLoggedIn,
  getAccessToken,
  getAccessTokenParsed,
  getIdToken,
  getIdTokenParsed,
  updateToken,
  getUsername,
  getUserEmail,
  hasAnyRealmRole,
  hasAllRealmRole,
  hasAnyClientRole,
  hasAllClientRole,
};

export default UserService;