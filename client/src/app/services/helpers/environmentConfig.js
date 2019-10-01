class EnvironmentConfig {
  USER_TOKEN = "USER_TOKEN";
  AUTHORIZATION_HEADER_KEY = "X-HLUser-Token";
  _currentUser = null;

  /**
   * Returns current user
   */
  get currentUser() {
    return this._currentUser || null;
  }

  /**
   * Sets current user (memberProfile)
   */
  set currentUser(user) {
    this._currentUser = user || null;
  }
}

export default new EnvironmentConfig();
