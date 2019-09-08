import authConfig from "../helpers/authConfig";

class BootstrapService {
  initializeAuth() {
    authConfig.initialize();
  }

  async initializeEnv(userProfile) {
    if (!userProfile) {
      return Promise.resolve("Member profile could not be loaded");
    }
    return Promise.resolve();
  }
}

export default new BootstrapService();
