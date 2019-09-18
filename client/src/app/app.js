import React, { useEffect } from "react";
import { Provider } from "react-redux";

import store from "./store";
import BootStrapService from "./services/initialization/bootstrapService";
import Alert from "./components/common/alert";
import Header from "./components/header";
import Router from "./router";

const App = () => {
  useEffect(() => {
    BootStrapService.initializeAuth();
  }, []);

  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        {/* <Alert /> */}
        <Router />
      </div>
    </Provider>
  );
};

export default App;
