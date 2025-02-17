//* LIBRARIES
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
//* ROUTES
import MainRouter from "./router/MainRouter";
//* STORE
import store from "./store/store";

const persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <MainRouter />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
