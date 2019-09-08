import axios from "axios";
import Cookies from "universal-cookie";
import envConfig from "./environmentConfig";

/**
 * Global authentication/authorization configuration and initialization helper.
 * Registers requests and response interceptors for axios.
 * @class AuthConfig
 */
class AuthConfig {
  requestInterceptorHandle = null;
  responseInterceptorHandle = null;

  /**
   * Reads the authentication token from the session cookie
   * @returns {string} authToken: The auth token for the current session
   * @memberof AuthConfig
   */
  get authToken() {
    let cookies = new Cookies();
    let tokenCookie = cookies.get(envConfig.USER_TOKEN);
    if (!tokenCookie) return null;

    let token = tokenCookie.replace("Authorization=", "");
    if (!token) return null;
    return token;
  }

  /**
   * Sets the authentication token returned in cookie
   * @returns null
   * @memberof AuthConfig
   */
  set authToken(token) {
    let cookies = new Cookies();
    if (!token) cookies.remove(envConfig.USER_TOKEN);
    else cookies.set(envConfig.USER_TOKEN, token);
  }

  /**
   * Registers a request interceptor that sets the 'Authorization' header on all outbound XHR requests
   * returns null
   * @memberof AuthConfig
   */
  _initAuthRequestInterceptor() {
    this.requestInterceptorHandle = axios.interceptors.request.use(
      config => {
        let token = this.authToken;
        if (token) {
          //set the token for all outgoing xhr request
          config.headers[envConfig.AUTHORIZATION_HEADER_KEY] = token;
        }
        return config;
      },
      error => Promise.reject(error)
    );
  }

  /**
   * Initializes the instance of the class
   * returns null
   * @memberof AuthConfig
   */
  initialize() {
    this._initAuthRequestInterceptor();
  }
}

export default new AuthConfig();
