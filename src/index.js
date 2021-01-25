import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes";
import { Provider } from "react-redux";
import store from "./redux/store";
// import { criarServidor } from "./services/MirageServer";
// const ambiente = process.env.NODE_ENV;
// if (ambiente !== "production") {
// criarServidor({ enviroment: ambiente });
// }

import App from "./App";

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        ))}
      </Switch>
    </Router>
  </Provider>,

  // <App />,
  // </React.StrictMode>,
  document.getElementById("root")
);
